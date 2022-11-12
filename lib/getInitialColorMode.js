import { LightTheme, DarkTheme } from "../styles/Theme";

export const getInitialColorMode = `
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem("color-mode");
      const hasPersistedPreference = typeof persistedColorPreference === "string";
  
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }
  
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      const hasMediaQueryPreference = typeof mql.matches === "boolean";
      if (hasMediaQueryPreference) {
        return mql.matches ? "dark" : "light";
      }
      return "light";
    }

    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty('--color-body', colorMode === 'light' ? "${LightTheme.colors.body}" : "${DarkTheme.colors.body}");
    root.style.setProperty('--color-text', colorMode === 'light' ? "${LightTheme.colors.text}" : "${DarkTheme.colors.text}");
    root.style.setProperty('--initial-color-mode', colorMode);    
  })()
`;
