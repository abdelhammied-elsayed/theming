import React from "react";

import Layout from "../layouts/layout";
import LatestNews from "../components/latest-news/latest-news";
import Slider from "../components/slider/slider";
import Head from "next/head";

export default function Index(props) {
  return (
    <>
      <Head>
        <meta name="author" content={props.name} />

        <title>{props.name}</title>
      </Head>

      <Layout>
        <LatestNews latestNews={props.name} />

        <Slider />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      name: "ibtikar technologies",
    },
  };
}
