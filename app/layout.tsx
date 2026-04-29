import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const onest = localFont({
  src: [
    {
      path: "../Onest/Onest-VariableFont_wght.ttf",
      style: "normal",
      weight: "100 900",
    },
  ],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HVM",
  description: "Health Value Management login homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onest.variable}>{children}</body>
    </html>
  );
}
