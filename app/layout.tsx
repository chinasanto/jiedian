import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "节点 | QuantClaw",
  description:
    "节点是 QuantClaw 的中文品牌站点，聚焦 AI 量化研发、因子孵化、研报转策略与量化系统工程。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
