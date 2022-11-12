import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

export const LightTheme = {
  name: "light",
  colors: {
    body: "rgb(255,255,255)",
    text: "rgb(20,20,20)",
    nav: "blue",
  },
};
export const DarkTheme = {
  name: "dark",
  colors: {
    body: "rgb(0,0,0)",
    text: "rgb(200,200,200)",
    nav: "green",
  },
};

const Theme = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue("--initial-color-mode");
    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (newValue) => {
    const root = window.document.documentElement;
    rawSetColorMode(newValue);
    localStorage.setItem("color-mode", newValue);
    root.style.setProperty("--color-body", newValue === "light" ? LightTheme.colors.body : DarkTheme.colors.body);
    root.style.setProperty("--color-text", newValue === "light" ? LightTheme.colors.text : DarkTheme.colors.text);
  };

  const theme = colorMode == "light" ? LightTheme : DarkTheme;

  return <ThemeProvider theme={{ ...theme, setColorMode }}>{children}</ThemeProvider>;
};

export default Theme;
