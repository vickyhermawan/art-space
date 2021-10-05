import React from "react";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { DefaultSeo } from 'next-seo';
import { configSEO } from 'next-seo.config';
const Header = dynamic(() => import('@components/organism/Header/Header'));
const Footer = dynamic(() => import('@components/organism/Footer/Footer'));
const SrcollTop = dynamic(() => import('@components/atoms/ScrollTop/ScrolTop'));

const Layout = ({ children }) => {
  return (
    <>
     {/* <Head>
          <title>Vihe's Space 👋</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="Description" content="This Website is a resume of Vicky Hermawan" />
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
      </Head> */}
      <DefaultSeo {...configSEO} />
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="Description" content="This Website is a resume of Vicky Hermawan" />
      </Head>
      <Header />
      {children}
      <SrcollTop />
      <Footer/>
    </>
  );
};

export default Layout;
