import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { slugify } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function GET() {
  const news = await db.news.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(news);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { titleAz, titleRu, contentAz, contentRu, imageUrl, published, slug } = body;

    if (!titleAz?.trim() || !contentAz?.trim()) {
      return NextResponse.json({ error: "Başlıq və mətn tələb olunur" }, { status: 400 });
    }

    const finalSlug = slug?.trim() || slugify(titleAz);

    const article = await db.news.create({
      data: {
        titleAz: titleAz.trim(),
        titleRu: titleRu?.trim() || null,
        contentAz: contentAz.trim(),
        contentRu: contentRu?.trim() || null,
        imageUrl: imageUrl?.trim() || null,
        published: !!published,
        slug: finalSlug,
      },
    });

    return NextResponse.json(article, { status: 201 });
  } catch (err: unknown) {
    if (err && typeof err === "object" && "code" in err && (err as { code: string }).code === "P2002") {
      return NextResponse.json({ error: "Bu slug artıq mövcuddur" }, { status: 409 });
    }
    return NextResponse.json({ error: "Server xətası" }, { status: 500 });
  }
}
