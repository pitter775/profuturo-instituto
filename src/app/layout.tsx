import type { Metadata } from "next";
import { Fredoka, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const socialImage =
  "https://raw.githubusercontent.com/pitter775/profuturo-instituto/main/public/images/og-instituto-pro-futuro.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Instituto Pro Futuro | Associação, educação e impacto social",
  description:
    "Site institucional do Instituto Pro Futuro, associação sem fins lucrativos dedicada à educação, assistência social, cultura, esporte e desenvolvimento comunitário.",
  openGraph: {
    title: "Instituto Pro Futuro",
    description:
      "Associação sem fins lucrativos dedicada à educação, assistência social, cultura, esporte e desenvolvimento comunitário.",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Instituto Pro Futuro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instituto Pro Futuro",
    description:
      "Associação sem fins lucrativos dedicada à educação, assistência social, cultura, esporte e desenvolvimento comunitário.",
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
