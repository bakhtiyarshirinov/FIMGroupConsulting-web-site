import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const settings = await db.setting.findMany();
  const obj = Object.fromEntries(settings.map((s) => [s.key, s.value]));
  return NextResponse.json(obj);
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    await Promise.all(
      Object.entries(body).map(([key, value]) =>
        db.setting.upsert({
          where: { key },
          update: { value: String(value) },
          create: { key, value: String(value) },
        })
      )
    );

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server xətası" }, { status: 500 });
  }
}
