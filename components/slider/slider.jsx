import getConfig from "next/config";
import React, { useContext } from "react";

import { useSelector } from "react-redux";
import useThemeComponent from "../../hooks/theme";
import { ThemeContext } from "../../providers/themeProvider";

export default function Slider() {
  const { Slider } = useThemeComponent();

  return <Slider />;
}
