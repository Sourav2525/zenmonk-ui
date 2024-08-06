import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import ResponsiveAppBar from "@/components/layouts/header";
import Providers from "@/components/progressbar-provider";
import ThemeProviderWrapper from "@/theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZENMONK UI",
  description: "Build your component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: '#fff'}}>
        <ThemeProviderWrapper>
          <ResponsiveAppBar />
          <Providers>{children}</Providers>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
