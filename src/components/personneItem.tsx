import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { iPersonne } from '../interfaces/iPersonne'

export default function PersonneItem(objPers:iPersonne) {
  return (
    <View className='flex-1 justify-center items-center bg-pinktober'>
      <Text>{objPers.cni}</Text>
      <Text>{objPers.nom}</Text>
      <Text>{objPers.prenom}</Text>
      <Text>{objPers.age}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})