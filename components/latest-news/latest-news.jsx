import React from "react";

import useThemeComponent from "../../hooks/theme";

function LatestNews({ latestNews }) {
  const { LatestNews } = useThemeComponent();

  return <LatestNews latestNews={latestNews} />;
}

export default LatestNews;
