import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useThemeMode } from '../theme/ThemeProvider';

export default function About() {
  const { theme, toggleTheme } = useThemeMode();
  return (
    <View
      className={`flex-1 items-center justify-center ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <Text
        className={`text-2xl font-bold ${
          theme === "dark" ? "text-pinktober" : "text-pinktober-dark"
        }`}
      >
        🎀 PinkOctobre
      </Text>
      <Text
        className={`mt-3 ${
          theme === "dark" ? "text-zinc-200" : "text-zinc-800"
        }`}
      >
        Application de sensibilisation au cancer du sein
      </Text>

      <Pressable
        onPress={toggleTheme}
        className={`mt-6 px-5 py-3 rounded-2xl ${
          theme === "dark" ? "bg-white" : "bg-black"
        }`}
      >
        <Text
          className={`font-semibold ${
            theme === "dark" ? "text-black" : "text-white"
          }`}
        >
          Basculer en mode {theme === "dark" ? "clair" : "sombre"}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})