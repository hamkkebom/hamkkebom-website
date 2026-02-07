import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  let query = supabase
    .from("portfolio_items")
    .select("id, title, slug, category, thumbnail_url, description, client_name, result, is_featured, created_at")
    .order("created_at", { ascending: false });

  if (category && category !== "all") {
    query = query.eq("category", category);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Portfolio fetch error:", error);
    return NextResponse.json(
      { error: "포트폴리오 목록을 불러올 수 없습니다." },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}
