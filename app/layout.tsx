import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Crevasio | شريكك التقني لتطوير البرمجيات",
  description: "Crevasio هو فريق متخصص في تطوير الحلول الرقمية، تصميم المواقع، وتطبيقات الويب. نحن نساعد الشركات الناشئة والمؤسسات على بناء منتجات برمجية عالية الجودة وقابلة للتوسع.",
  keywords: ["تطوير برمجيات", "تصميم مواقع", "تطبيقات ويب", "برمجة", "فريق برمجة", "حلول رقمية", "Next.js", "React", "Software Development", "Web Development", "Tech Partner"],
  authors: [{ name: "Crevasio Team" }],
  creator: "Crevasio Team",
  publisher: "Crevasio",
  openGraph: {
    title: "Crevasio | شريكك التقني لتطوير البرمجيات",
    description: "فريق متخصص في تطوير الحلول الرقمية وتطبيقات الويب الحديثة.",
    type: "website",
    locale: "ar_EG",
    siteName: "Crevasio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crevasio | شريكك التقني لتطوير البرمجيات",
    description: "فريق متخصص في تطوير الحلول الرقمية وتطبيقات الويب الحديثة.",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
