import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Cause } from '../interfaces/cause';
import { useThemeMode } from '../theme/ThemeProvider';

export default function CauseCard(objItem:Cause) {
  const { theme } = useThemeMode();
  return (
    <View>
      <Pressable
        onPress={() => {router.navigate({pathname: '/causes/[id]', params: {id: objItem.id}})}}
        className='active:opacity-70'
      >
            <View
            style={{backgroundColor: theme === "dark" ? "#000" : "#f8faff"}}
            className="bg-zinc-900 p-3 rounded-xl mb-3 shadow-md">
              <Text className="text-pinktober font-semibold">{objItem.nom}</Text>
              <Text className="text-zinc-400">{objItem.description}</Text>
            </View>
          </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})