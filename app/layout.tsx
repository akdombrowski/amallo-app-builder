import type { Metadata } from "next";
import { Inter } from "next/font/google";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js on GitHub Pages",
  description: "A Next.js web application on GitHub Pages",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <React.Fragment>
          <CssBaseline enableColorScheme />
          {children}
        </React.Fragment>
      </body>
    </html>
  );
}
