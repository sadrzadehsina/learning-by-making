import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeStateContext = createContext();
const ThemeUpdaterContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    switch (theme) {
      case "light":
        document.body.removeAttribute("data-theme");
        break;
      case "dark":
      default:
        document.body.setAttribute("data-theme", "dark");
    }
  }, [theme]);

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeUpdaterContext.Provider value={setTheme}>
        {props.children}
      </ThemeUpdaterContext.Provider>
    </ThemeStateContext.Provider>
  );
}

function useThemeState() {
  const themeState = useContext(ThemeStateContext);
  if (!themeState) {
    throw new Error("useThemeState must be used within a ThemeProvider");
  }
  return themeState;
}

function useThemeUpdater() {
  const themeUpdater = useContext(ThemeUpdaterContext);
  if (!themeUpdater) {
    throw new Error("useThemeUpdater must be used within a ThemeProvider");
  }
  return themeUpdater;
}

function ToggleThemeButton() {
  const theme = useThemeState();
  const setTheme = useThemeUpdater();

  const isLight = useMemo(() => theme === "light", [theme]);

  return (
    <button onClick={() => setTheme(isLight ? "dark" : "light")}>
      Toggle {isLight ? "Dark" : "Light"}
    </button>
  );
}

export default ThemeProvider;
export { useThemeState, useThemeUpdater, ToggleThemeButton };
