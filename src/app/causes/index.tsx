import CauseCard from '@/src/components/CauseCard'
import { CAUSES } from '@/src/data/causes'
import { useThemeMode } from '@/src/theme/ThemeProvider'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function Index() {
  const { theme } = useThemeMode();
  return (
    <View className="flex-1 bg-black px-4 pt-6 items-center"
    style={{backgroundColor: theme === "dark" ? "#000" : "#fff"}}
    >
      <Text className="text-pinktober text-3xl font-bold mb-3">
        Liste des causes
      </Text>
      <FlatList
        data={CAUSES}
        renderItem={({item}) => <CauseCard {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({})