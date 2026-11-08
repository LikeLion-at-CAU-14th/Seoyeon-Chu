import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import { albums } from "@/data/albums";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {default: "나의 앨범", template: "%s | 나의 앨범"},
  description: "요즘 내가 듣는 앨범들",

// 과제: metadata에 openGraph 추가해서 링크 미리보기 꾸미기

  openGraph: {
      title: "나의 앨범",
      description: "요즘 내가 듣는 앨범들",
      url: "/",
      siteName: "나의 앨범",
      images: [
        {
          url: albums[0].cover,
          width: 3000,
          height: 3000,
          alt: "나의 앨범 대표 이미지",
        },
      ],
      type: "website",
    },
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header className="site-header">
          <Link href="/" className="logo">
            나의 앨범
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}