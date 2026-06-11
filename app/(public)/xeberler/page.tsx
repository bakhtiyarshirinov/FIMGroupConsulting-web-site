import type { Metadata } from "next";
import { formatDate, truncate } from "@/lib/utils";
import { StaggerContainer, StaggerItem } from "@/components/shared/SectionReveal";
import Link from "next/link";
import Image from "next/image";
import { staticNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "Xəbərlər",
  description: "FİM GROUP CONSULTİNG MMC-nin son xəbərləri, məqalələri və analitikası",
};

export default function XeberlerPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(184,150,62,0.08)_0%,transparent_100%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-gold text-xs font-inter font-medium tracking-[0.3em] uppercase mb-4 block">
            Son yeniliklər
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Xəbərlər
          </h1>
          <p className="text-gray-400 text-xl font-inter max-w-2xl mx-auto">
            Qiymətləndirmə bazarındakı son tendensiyalar, analitika və şirkət xəbərləri
          </p>
        </div>
      </section>

      {/* News grid */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {staticNews.map((article) => (
              <StaggerItem key={article.id}>
                <Link href={`/xeberler/${article.slug}`} className="group block h-full">
                  <article className="h-full bg-white border border-gold/15 hover:border-gold/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_rgba(184,150,62,0.15)] hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-52 bg-dark overflow-hidden">
                      {article.imageUrl ? (
                        <Image
                          src={article.imageUrl}
                          alt={article.titleAz}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-dark-100 to-dark-200 flex items-center justify-center">
                          <svg className="w-12 h-12 text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-gray-400 text-xs font-inter mb-3 flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {formatDate(article.createdAt)}
                      </div>
                      <h2 className="font-playfair text-xl font-bold text-dark mb-3 leading-snug group-hover:text-gold transition-colors">
                        {article.titleAz}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed font-inter">
                        {truncate(article.contentAz, 120)}
                      </p>
                    </div>

                    <div className="px-6 pb-6">
                      <span className="inline-flex items-center gap-1.5 text-gold text-sm font-medium group-hover:gap-2.5 transition-all">
                        Ətraflı oxu
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
