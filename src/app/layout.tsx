import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MotoZone — Authorized Suzuki Dealer",
  description: "Pakistan's premier authorized Suzuki dealer. Premium heavy bikes, certified mechanics, and unmatched after-sales service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
