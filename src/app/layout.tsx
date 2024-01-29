import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import localFont from 'next/font/local'
import "./globals.css";
import Loading from "@/components/Loading";
import Cursor from "@/components/Cursor";

const OverusedGrotesk = localFont({
  src: '../../public/fonts/OverusedGrotesk-VF.woff2',
  display: 'swap',
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={OverusedGrotesk.className}>
        <Cursor/>
        {/* <Loading/> */}
        {children}
      </body>
    </html>
  );
}
