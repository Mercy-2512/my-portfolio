import type { Metadata } from "next";
import "./globals.css";
import "./globals.css";
import { Inter, Outfit, Sora } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Mercy | Portfolio",
  description: "Implementation analyst at Athenahealth | Data Engineer | Frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <html lang="en" className={`${inter.variable} ${outfit.variable} ${sora.variable}`}>
      <body className="bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
