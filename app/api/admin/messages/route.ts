import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const messages = await db.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(messages);
}
