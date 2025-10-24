import { CAUSES } from '@/src/data/causes';
import { useThemeMode } from '@/src/theme/ThemeProvider';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Id() {
    const { id } = useLocalSearchParams();
    const cause = CAUSES.find((item) => item.id === id);
    const { theme } = useThemeMode();

    if(!cause){
        return (
      <View className="flex-1 items-center justify-center bg-black">
        <Text className="text-pinktober text-lg">Cause introuvable</Text>
      </View>
    );
    }
  return (
    <ScrollView className='flex-1 bg-white dark:bg-black  p-4'
    style={{backgroundColor: theme === "dark" ? "#000" : "#fff"}}>
        <Image source={{ uri: cause.image }} className="w-full h-60 rounded-xl mb-4" />
        <Text className="text-pinktober text-2xl font-extrabold mb-2">{cause.nom}</Text>
        <Text className="dark:text-zinc-300 mb-3 "
        style={{color: theme === "dark" ? "#fff" : "#000"}}>{cause.description}</Text>
        <Text className="text-pinktober text-xl mb-2 dark:text-white">Méthodes préventives</Text>
            {cause.preventions.map((p, i) => (
            <Text key={i} className="dark:text-white mb-1"
            style={{color: theme === "dark" ? "#fff" : "#000"}}>
          • {p}
            </Text>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({})