import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { iFruit } from '../interfaces/iFruit'

export default function fruitItem(objFruit:iFruit) {
  return (
    <View className='flex-1 justify-center items-center bg-pinktober p-4'>
        <Ionicons name='bug' size={24} color={'orange'} />
      <Text>{objFruit.nom}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})