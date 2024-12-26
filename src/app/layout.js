import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

import Container from "@/components/Container";
import { AppContextApi } from "@/contextapi/CreateContexApi";
// import { CSPostHogProvider } from "@/providers/ph-provider";
// import PostHogPageView from "@/components/posthog/post-hog-page-view";
// import { Suspense } from "react";
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

        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-F8MWKGLZ88"
        />
        <Script id="ga-script" strategy="lazyOnload">
          {` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F8MWKGLZ88',{
              page_path: window.location.pathname,
              });`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100 -mt-0 min-h-dvh`}
      >
        {/* <CSPostHogProvider> */}
        <AppContextApi>
          <Container className="py-1">
            <Navbar className="w-[570px] flex bg-red-200" />
            {/* <Suspense fallback={null}>
                <PostHogPageView />
              </Suspense> */}
            {children}
            <Footer />
          </Container>
        </AppContextApi>
        {/* </CSPostHogProvider> */}
      </body>
    </html>
  );
}
