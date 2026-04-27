import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MeteoX — Ob-havo & Valyuta Kurslari",
  description: "Real vaqt rejimida ob-havo ma'lumotlari va valyuta kurslari",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div style={{ minHeight: "100vh" }}>
          <Navbar />
          <main style={{ minHeight: "calc(100vh - 140px)" }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
