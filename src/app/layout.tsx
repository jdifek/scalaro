import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Scalaro — White-Label Affiliate Tracking & Content Platform",
    template: "%s | Scalaro",
  },
  description:
    "Scalaro provides white-label affiliate tracking software and content platform for MFIs, SaaS founders, and digital agencies. Launch your affiliate program in 72 hours.",
  keywords: ["affiliate tracking", "white-label software", "content platform", "affiliate marketing", "fintech", "SaaS"],
  openGraph: {
    type: "website",
    url: "https://scalaro.io",
    siteName: "Scalaro",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
<body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
