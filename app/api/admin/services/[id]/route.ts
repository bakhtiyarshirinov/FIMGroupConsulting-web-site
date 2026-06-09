import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const service = await db.service.update({
      where: { id: Number(params.id) },
      data: {
        titleAz: body.titleAz,
        titleRu: body.titleRu || null,
        descriptionAz: body.descriptionAz,
        descriptionRu: body.descriptionRu || null,
        visible: body.visible,
      },
    });
    return NextResponse.json(service);
  } catch {
    return NextResponse.json({ error: "Server xətası" }, { status: 500 });
  }
}
