import dynamic from "next/dynamic";
import { useContext } from "react";
import { ThemeContext } from "../providers/themeProvider";

function useThemeComponent() {
  const theme = useContext(ThemeContext);

  return {
    default: {
      Layout: dynamic(() => import("../layouts/layout1")),
      LatestNews: dynamic(() =>
        import("../components/latest-news/latest-news.theme1")
      ),
      Slider: dynamic(() => import("../components/slider/slider.theme1")),
    },

    secondTheme: {
      Layout: dynamic(() => import("../layouts/layout2")),
      LatestNews: dynamic(() =>
        import("../components/latest-news/latest-news.theme2")
      ),
      Slider: () => null,
    },
  }[theme];
}

export default useThemeComponent;
