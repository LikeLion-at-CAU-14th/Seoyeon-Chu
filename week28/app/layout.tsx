import Link from "next/link";
import "./globals.css";

// 과제: metadata에 openGraph 추가해서 링크 미리보기 꾸미기

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