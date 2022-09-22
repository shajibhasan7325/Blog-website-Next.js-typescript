import Head from "next/head";
import React, { ReactNode } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
const Format = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>blog</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Format;
