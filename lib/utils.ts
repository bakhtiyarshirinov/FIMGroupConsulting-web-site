import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("az-AZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(text: string): string {
  const map: Record<string, string> = {
    ə: "e", ə: "e", ğ: "g", ı: "i", ö: "o", ü: "u",
    ç: "c", ş: "s", İ: "i", Ə: "e", Ğ: "g", Ö: "o",
    Ü: "u", Ç: "c", Ş: "s",
  };
  return text
    .toLowerCase()
    .replace(/[əğıöüçşİƏĞÖÜÇŞ]/g, (c) => map[c] ?? c)
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trimEnd() + "...";
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\+994)\s?(\d{2})\s?(\d{3})\s?(\d{2})\s?(\d{2})/, "$1 $2 $3 $4 $5");
}
