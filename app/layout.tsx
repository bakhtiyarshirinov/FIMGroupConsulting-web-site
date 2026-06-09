import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"),
  title: {
    default: "FİM GROUP CONSULTİNG MMC | Peşəkar Qiymətləndirmə",
    template: "%s | FİM GROUP CONSULTİNG",
  },
  description:
    "Azərbaycanda daşınar və daşınmaz əmlak, müəssisə, qeyri-maddi aktivlərin peşəkar qiymətləndirilməsi xidmətləri. QT-0135 | VÖEN: 3105651911",
  keywords:
    "qiymətləndirmə, əmlak qiymətləndirmə, biznes qiymətləndirmə, FIM GROUP, Azərbaycan, Bakı",
  openGraph: {
    type: "website",
    locale: "az_AZ",
    siteName: "FİM GROUP CONSULTİNG MMC",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-dark font-inter text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
