import { useContext } from "react";
import { ThemeProviderContext } from "../components/theming/theme-provider";

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
};
