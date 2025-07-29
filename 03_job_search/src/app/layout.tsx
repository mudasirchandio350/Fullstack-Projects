import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Talent Loop",
  description: "A platform to connect job seekers with opportunities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.png" type="png" />
        </head>
        <body
          className={`${montserrat.className} antialiased cursor-not-allowed`}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="max-sm:hidden">
              <SmoothCursor />
            </div>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
