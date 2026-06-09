import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Ad, telefon və mesaj mütləqdir" },
        { status: 400 }
      );
    }

    const msg = await db.contactMessage.create({
      data: {
        name: name.trim(),
        email: email?.trim() || null,
        phone: phone.trim(),
        message: message.trim(),
      },
    });

    return NextResponse.json({ success: true, id: msg.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server xətası" }, { status: 500 });
  }
}
