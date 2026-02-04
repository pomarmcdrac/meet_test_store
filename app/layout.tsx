import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/styles/global.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Meet Test Store",
  description: "Meet Test Store",
};

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} container`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
