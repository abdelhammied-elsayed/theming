import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children, ...props }) {
  // const [theme, setTheme] = useState(null);
  console.log("props", props);
  // useEffect(() => {
  //   setTheme("default");
  // }, []);

  // if (theme === null) {
  //   return null;
  // }

  return (
    <ThemeContext.Provider value={props.theme}>
      {children}
    </ThemeContext.Provider>
  );
}
