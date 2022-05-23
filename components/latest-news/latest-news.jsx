import React, { useContext } from "react";

import getConfig from "next/config";

import useThemeComponent from "../../hooks/theme";

function LatestNews({ latestNews }) {
  const { LatestNews } = useThemeComponent();

  return <LatestNews latestNews={latestNews} />;
}

LatestNews.propTypes = {};

export default LatestNews;
