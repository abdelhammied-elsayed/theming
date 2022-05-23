import "../styles/globals.css";

import store from "../store/store.config";
import { Provider } from "react-redux";
import ThemeProvider from "../providers/themeProvider";
import getConfig from "next/config";

function MyApp({ Component, pageProps }) {
  const { publicRuntimeConfig } = getConfig();
  console.log("publicRuntimeConfig", publicRuntimeConfig);
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

  publicRuntimeConfig.theme = "default";
  console.log("publicRuntimeConfig from app", publicRuntimeConfig);
  return { props: null };
};
export default MyApp;
