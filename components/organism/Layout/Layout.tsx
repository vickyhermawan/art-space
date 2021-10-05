import React from "react";
import Head from 'next/head';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@components/organism/Header/Header'));
const Footer = dynamic(() => import('@components/organism/Footer/Footer'));
const SrcollTop = dynamic(() => import('@components/atoms/ScrollTop/ScrolTop'));

const Layout = ({ children }) => {

  const meta = {
    title : "Vihe's Space 👋",
    description: "This Website is a resume of Vicky Hermawan",
    themeColor : "#317EFB",
    type : "website",
    siteName : "Vihe's Space 👋",
    image : "https://vihermawan-space.vercel.app/images/banner.png",
    url : "https://vihermawan-space.vercel.app"
  }

  return (
    <>
     <Head>
          <title>{meta.title}</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="Description" content={meta.description} />
          <meta name="theme-color" content="#317EFB" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="/images/icons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/images/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/icons/apple-icon.png"></link>
          <link rel="manifest" href="/manifest.json" />
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={meta.siteName} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@vihermawan" />
          <meta key="tw-image" name="twitter:image" content={meta.image} />
          <meta name="twitter:image:width" content="500" />
          <meta name="twitter:image:height" content="500" />
          <meta key="tw-title" name="twitter:title" content={meta.title} />
          <meta
            key="tw-description"
            name="twitter:description"
            content={meta.description}
          />
          <meta key="tw-url" name="twitter:url" content={meta.url} />

          <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="Description" content={meta.description} />
      </Head>
      <Header />
      {children}
      <SrcollTop />
      <Footer/>
    </>
  );
};

export default Layout;
