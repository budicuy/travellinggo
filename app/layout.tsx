import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "500"],
});

export const metadata: Metadata = {
  title: "TravellingGo",
  description: "A travel website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="synthwave" >
      <body className={quicksand.className}>
        <Navbar />
        {children}

      </body>
    </html>
  );
}
