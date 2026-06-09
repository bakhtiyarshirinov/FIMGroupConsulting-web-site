import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";
import { formatDate } from "@/lib/utils";
import { SectionReveal } from "@/components/shared/SectionReveal";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await db.news.findUnique({ where: { slug: params.slug } });
  if (!article) return { title: "Tapılmadı" };
  return {
    title: article.titleAz,
    description: article.contentAz.slice(0, 160),
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const article = await db.news.findUnique({
    where: { slug: params.slug, published: true },
  });

  if (!article) notFound();

  const related = await db.news.findMany({
    where: { published: true, NOT: { slug: params.slug } },
    take: 3,
    orderBy: { createdAt: "desc" },
  });

  // Convert plain text with **bold** and newlines to paragraphs
  const formatContent = (text: string) => {
    return text
      .split("\n\n")
      .map((para, i) => {
        const formatted = para
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/\n/g, "<br/>");
        return `<p>${formatted}</p>`;
      })
      .join("");
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-10 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(184,150,62,0.06)_0%,transparent_100%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <SectionReveal>
            <Link
              href="/xeberler"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gold text-sm font-inter mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Xəbərlərə qayıt
            </Link>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-400 text-sm font-inter">
                {formatDate(article.createdAt)}
              </span>
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {article.titleAz}
            </h1>
            {article.titleRu && (
              <p className="text-gray-500 text-lg italic">{article.titleRu}</p>
            )}
          </SectionReveal>
        </div>
      </section>

      {/* Article content */}
      <section className="py-12 bg-dark">
        <div className="max-w-4xl mx-auto px-4">
          {/* Featured image */}
          {article.imageUrl && (
            <SectionReveal className="mb-10">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden border border-gold/15">
                <Image
                  src={article.imageUrl}
                  alt={article.titleAz}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
              </div>
            </SectionReveal>
          )}

          {/* Content */}
          <SectionReveal delay={0.1}>
            <div
              className="prose-gold"
              dangerouslySetInnerHTML={{ __html: formatContent(article.contentAz) }}
            />
          </SectionReveal>

          {/* Russian content */}
          {article.contentRu && (
            <SectionReveal delay={0.2} className="mt-10">
              <div className="glass border border-gold/15 rounded-2xl p-6">
                <h3 className="font-playfair text-xl text-gold font-bold mb-4">
                  Русская версия / Rus dilindəki versiya
                </h3>
                <div
                  className="prose-gold"
                  dangerouslySetInnerHTML={{ __html: formatContent(article.contentRu) }}
                />
              </div>
            </SectionReveal>
          )}

          {/* Author/company tag */}
          <SectionReveal delay={0.3} className="mt-10">
            <div className="glass border border-gold/15 rounded-xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <div className="text-white font-inter font-medium text-sm">
                  FİM GROUP CONSULTİNG MMC
                </div>
                <div className="text-gray-500 text-xs mt-0.5">
                  QT-0135 | Peşəkar Qiymətləndirmə Şirkəti
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-16 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal className="mb-8">
              <h2 className="font-playfair text-3xl font-bold text-dark">
                Digər Xəbərlər
              </h2>
            </SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <SectionReveal key={rel.id}>
                  <Link href={`/xeberler/${rel.slug}`} className="group block">
                    <div className="bg-white border border-gold/15 hover:border-gold/40 rounded-xl overflow-hidden transition-all hover:shadow-[0_10px_30px_rgba(184,150,62,0.1)] hover:-translate-y-0.5">
                      {rel.imageUrl && (
                        <div className="relative h-40 overflow-hidden">
                          <Image src={rel.imageUrl} alt={rel.titleAz} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                      )}
                      <div className="p-5">
                        <div className="text-gray-400 text-xs mb-2">{formatDate(rel.createdAt)}</div>
                        <h3 className="font-playfair text-lg font-bold text-dark group-hover:text-gold transition-colors leading-snug">
                          {rel.titleAz}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
