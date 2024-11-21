import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Image from "next/image";

import Container from "@/components/Container";
import Head from "next/head";
import favicon from "../../public/favicon.ico";
import { AppContextApi } from "@/contextapi/CreateContexApi";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Az xalq parlamenti",
  description: "People and parliament are one solid mass.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="../../images/favicon.ico" alt="favicon" rel="icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100 -mt-0 min-h-dvh`}
      >
        <AppContextApi>
          <Container className="py-1">
            <Navbar className="w-[570px] flex bg-red-200" />
            {children}
            <Footer />
          </Container>
        </AppContextApi>
      </body>
    </html>
  );
}
