import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

interface RouteParams {
  params: { slug: string };
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { data, error } = await supabase
    .from("portfolio_items")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (error || !data) {
    return NextResponse.json(
      { error: "포트폴리오를 찾을 수 없습니다." },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}
