import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ysterkorea - LED 디스플레이 B2B 솔루션",
  description: "혁신적인 LED 디스플레이 기술로 건축의 미래를 만들어갑니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

