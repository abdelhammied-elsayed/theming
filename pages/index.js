import React from "react";

import Layout from "../layouts/layout";
import LatestNews from "../components/latest-news/latest-news";
import Slider from "../components/slider/slider";

export default function Index() {
  return (
    <Layout>
      <LatestNews latestNews={"Latest News From Backend"} />

      <Slider />
    </Layout>
  );
}
