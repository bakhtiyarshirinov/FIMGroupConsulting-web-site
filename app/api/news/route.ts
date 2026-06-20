import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const news = await db.news.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(news);
  } catch {
    return NextResponse.json({ error: "Server xətası" }, { status: 500 });
  }
}
