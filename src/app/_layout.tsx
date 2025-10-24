import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider, useThemeMode } from "../theme/ThemeProvider";

function DrawerLayout() {
  const { theme } = useThemeMode();

  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: theme === "dark" ? "#000" : "#fff" },
        headerTintColor: theme === "dark" ? "#ec4899" : "#be185d",
        drawerActiveTintColor: "#ec4899",
        drawerInactiveTintColor: theme === "dark" ? "#fff" : "#000",
        drawerStyle: { backgroundColor: theme === "dark" ? "#111" : "#f9f9f9" },
      }}
    >
      <Drawer.Screen name="index" options={{ title: "Accueil" }} />
      <Drawer.Screen name="causes/index" options={{ title: "Causes" }} />
      <Drawer.Screen
        name="causes/[id]"
        options={{ title: "Détails", drawerItemStyle: { display: "none" } }}
      />
      <Drawer.Screen name="about" options={{ title: "À propos" }} />
    </Drawer>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <DrawerLayout />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}