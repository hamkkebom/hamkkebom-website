import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { supabase } from "@/lib/supabase";
import { sendContactNotification } from "@/lib/sendgrid";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "입력 데이터가 올바르지 않습니다.", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, company, serviceType, budget, message } =
      parsed.data;

    // Supabase insert
    const { error: dbError } = await supabase.from("contacts").insert({
      name,
      email,
      phone: phone || null,
      company: company || null,
      service_type: serviceType,
      budget: budget || null,
      message,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "데이터 저장에 실패했습니다." },
        { status: 500 }
      );
    }

    // SendGrid email notification (non-blocking)
    try {
      await sendContactNotification({
        name,
        email,
        phone,
        company,
        serviceType,
        budget,
        message,
      });
    } catch (emailError) {
      console.error("SendGrid email error:", emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
