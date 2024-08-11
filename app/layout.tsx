import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PageMindAI ",
  description:
    "WebSense AI—an advanced AI tool that scans entire webpages and delivers context-aware answers in real-time. Perfect for businesses looking to enhance customer support, streamline navigation, and offer personalized, intelligent assistance right on their website. Elevate your web experience with WebSense AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen antialiased")}>
        <Providers>
          <main className=" h-screen text-forground bg-background">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
