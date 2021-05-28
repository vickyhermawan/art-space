import React from "react";
import Head from 'next/head';
import Header from "@components/organism/Header/Header";
import Footer from "@components/organism/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
     <Head>
          <title>Vihe's Space 👋</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="Description" content="This Website is a resume of Vicky Hermawan" />
          <meta name="theme-color" content="#317EFB" />
      </Head>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="Description" content="This Website is a resume of Vicky Hermawan" />
      </Head>
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
