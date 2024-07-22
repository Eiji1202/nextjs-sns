import Header from "@/components/organisms/Header/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import s from "./style.module.sass";
import "ress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SNS app",
  description: "A SNS app for coding test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main className={s.main}>{children}</main>
      </body>
    </html>
  );
}
