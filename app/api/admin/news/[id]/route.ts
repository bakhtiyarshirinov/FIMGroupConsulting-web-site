import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { slugify } from "@/lib/utils";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const { titleAz, contentAz, imageUrl, published, slug } = body;

    const article = await db.news.update({
      where: { id: Number(params.id) },
      data: {
        titleAz: titleAz?.trim(),
        contentAz: contentAz?.trim(),
        imageUrl: imageUrl?.trim() || null,
        published: !!published,
        slug: slug?.trim() || slugify(titleAz),
      },
    });

    return NextResponse.json(article);
  } catch {
    return NextResponse.json({ error: "Server xətası" }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    await db.news.delete({ where: { id: Number(params.id) } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server xətası" }, { status: 500 });
  }
}
