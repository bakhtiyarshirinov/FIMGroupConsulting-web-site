import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Ana Səhifə" },
  { href: "/xidmetler", label: "Xidmətlər" },
  { href: "/haqqimizda", label: "Haqqımızda" },
  { href: "/xeberler", label: "Xəbərlər" },
  { href: "/elaqe", label: "Əlaqə" },
];

const services = [
  "Daşınar Əmlakın Qiymətləndirilməsi",
  "Daşınmaz Əmlakın Qiymətləndirilməsi",
  "Müəssisələrin Qiymətləndirilməsi",
  "Dəymiş Zərərin Qiymətləndirilməsi",
  "Qeyri-Maddi Aktivlərin Qiymətləndirilməsi",
];

export function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-gold/10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.svg"
                alt="FİM GROUP CONSULTİNG"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Azərbaycanda peşəkar qiymətləndirmə xidmətləri. Beynəlxalq
              standartlara uyğun, etibarlı ekspertiza.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:fimgroupcounsulting@bk.ru"
                className="p-2 rounded-lg bg-dark-200 border border-gold/10 text-gold hover:bg-gold/10 hover:border-gold/30 transition-all"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a
                href="tel:+994102372324"
                className="p-2 rounded-lg bg-dark-200 border border-gold/10 text-gold hover:bg-gold/10 hover:border-gold/30 transition-all"
                aria-label="Telefon"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-playfair text-white font-semibold mb-5 heading-underline">
              Keçidlər
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-white font-semibold mb-5 heading-underline">
              Xidmətlər
            </h4>
            <ul className="space-y-2.5">
              {services.map((svc) => (
                <li key={svc}>
                  <Link
                    href="/xidmetler"
                    className="text-gray-400 hover:text-gold text-sm transition-colors duration-200 flex items-start gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors mt-1.5 shrink-0" />
                    <span>{svc}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-white font-semibold mb-5 heading-underline">
              Əlaqə
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-gold mt-0.5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-400 text-sm">
                  AZ1033, Bakı, Nərimanov r., Məmməd Araz 20 (AP Plaza)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-gold shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className="text-sm">
                  <a
                    href="tel:+994102372324"
                    className="text-gray-400 hover:text-gold transition-colors block"
                  >
                    +994 10 237 23 24
                  </a>
                  <a
                    href="tel:+994702302338"
                    className="text-gray-400 hover:text-gold transition-colors block"
                  >
                    +994 70 230 23 38
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-gold shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:fimgroupcounsulting@bk.ru"
                  className="text-gray-400 hover:text-gold text-sm transition-colors"
                >
                  fimgroupcounsulting@bk.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FİM GROUP CONSULTİNG MMC. Bütün hüquqlar qorunur.
          </p>
          <div className="flex items-center gap-4 text-gray-600 text-xs">
            <span>QT-0135</span>
            <span className="w-1 h-1 rounded-full bg-gold/40" />
            <span>VÖEN: 3105651911</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
