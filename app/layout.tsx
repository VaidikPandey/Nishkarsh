import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";

const fontsans = FontSans({
  variable: "--fontsans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nishkarsh - AI-Powered PDF Summarizer",
  description:
    "Nishkarsh is an AI-powered tool that summarizes PDF documents, making it easier to digest large amounts of information quickly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en">
      <body className={`${fontsans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
