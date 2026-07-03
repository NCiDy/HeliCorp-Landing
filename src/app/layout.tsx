import type {Metadata} from "next";
import "./globals.css";

export const metadata:Metadata = {
  title: "HELICORP - Máy cho thú cưng ăn PETKIT Yumshare Dual-Hopper",
  description: 
    "Landing Page giới thiệu máy cho thú cưng ăn PETKIT Yumshare Dual-Hopper với camera AI, điều khiển từ xa qua ứng dụng và nhiều tính năng thông minh",

  openGraph:{
    title: "HELICORP - Máy cho thú cưng ăn PETKIT Yumshare Dual-Hopper",
    description:
      "Landing Page giới thiệu máy cho thú cưng ăn PETKIT Yumshare Dual-Hopper với camera AI.",
    images: ["/image/petkit_hero2.webp"],
    locale: "vi_VN",
    type:"website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
