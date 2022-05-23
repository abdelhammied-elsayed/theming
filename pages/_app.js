import "../styles/globals.css";

import store from "../store/store.config";
import { Provider } from "react-redux";
import ThemeProvider from "../providers/themeProvider";
import getConfig from "next/config";

function MyApp({ Component, pageProps }) {
  const { publicRuntimeConfig } = getConfig();

  return (
    <Provider store={store}>
      <ThemeProvider theme={publicRuntimeConfig.theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const { publicRuntimeConfig } = getConfig();

  publicRuntimeConfig.theme = "secondTheme";

  return { props: null };
};

export default MyApp;
