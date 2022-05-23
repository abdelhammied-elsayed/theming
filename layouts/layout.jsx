import React from "react";

import useThemeComponent from "../hooks/theme";

export default function Layout({ children }) {
  const { Layout } = useThemeComponent();

  return <Layout>{children}</Layout>;
}
