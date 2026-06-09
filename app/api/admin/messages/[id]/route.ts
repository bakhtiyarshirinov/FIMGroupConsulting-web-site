import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { read } = await req.json();
    const msg = await db.contactMessage.update({
      where: { id: Number(params.id) },
      data: { read: !!read },
    });
    return NextResponse.json(msg);
  } catch {
    return NextResponse.json({ error: "Server xətası" }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    await db.contactMessage.delete({ where: { id: Number(params.id) } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server xətası" }, { status: 500 });
  }
}
