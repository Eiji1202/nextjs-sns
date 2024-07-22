import Header from "@/components/organisms/Header/Header";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import s from "./style.module.sass";
import './global.sass'
import "ress";
import { siteConfig } from "@/config/site";

const notoSansJp = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    title: siteConfig.name,
    siteName: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.authors[0].name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>
        <Header />
        <main className={s.main}>{children}</main>
      </body>
    </html>
  );
}
