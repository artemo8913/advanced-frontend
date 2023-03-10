import React, { useMemo } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.NORMAL;

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme as Theme);
  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );
  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
export default ThemeProvider;
