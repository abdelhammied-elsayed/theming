import "../styles/globals.css";

import store from "../store/store.config";
import { Provider } from "react-redux";
import ThemeProvider from "../providers/themeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
