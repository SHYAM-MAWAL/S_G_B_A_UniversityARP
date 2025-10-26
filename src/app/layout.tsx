import type { Metadata } from "next";
import { DM_Sans, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shyamai.com"),
  title: "SHYAM_AI — Intelligent Automation for the Future",
  description:
    "SHYAM_AI builds intelligent automation, AI agents, and data-driven systems that empower businesses to unlock the full potential of artificial intelligence.",
  keywords: [
    "AI automation",
    "SHYAM_AI",
    "artificial intelligence",
    "AI agents",
    "next-generation technology",
  ],
  openGraph: {
    title: "SHYAM_AI — Intelligent Automation for the Future",
    description:
      "Discover SHYAM_AI: futuristic AI agents, analytics, and intelligent automation built to propel your organisation forward.",
    url: "https://www.shyamai.com",
    siteName: "SHYAM_AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHYAM_AI — Intelligent Automation for the Future",
    description:
      "Experience SHYAM_AI's transformative AI platform bringing automation, analytics, and intelligent agents together.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
