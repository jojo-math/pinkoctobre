import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SystemUI from "expo-system-ui";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Appearance, ColorSchemeName } from "react-native";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Charger le thème au démarrage
  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem("theme");
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
        SystemUI.setBackgroundColorAsync(saved === "dark" ? "#000" : "#fff");
      } else {
        const systemTheme: ColorSchemeName = Appearance.getColorScheme();
        const initialTheme = systemTheme === "dark" ? "dark" : "light";
        setTheme(initialTheme);
        SystemUI.setBackgroundColorAsync(initialTheme === "dark" ? "#000" : "#fff");
      }
    })();

    // Écoute le changement système en direct
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme) {
        setTheme(colorScheme as "light" | "dark");
        SystemUI.setBackgroundColorAsync(colorScheme === "dark" ? "#000" : "#fff");
      }
    });
    return () => listener.remove();
  }, []);

  const toggleTheme = async () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    await AsyncStorage.setItem("theme", next);
    SystemUI.setBackgroundColorAsync(next === "dark" ? "#000" : "#fff");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook pratique
export const useThemeMode = () => useContext(ThemeContext);
