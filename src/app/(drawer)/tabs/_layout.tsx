import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const color: string = 'orange';

function TabLayout(){
    return(
        <Tabs 
        screenOptions={{tabBarActiveTintColor:'orange'}}>
            <Tabs.Screen name='index' 
            options={{ 
              title: "Acceuil",
              tabBarIcon: () => <Ionicons name='information-circle-outline' size={24} color={color} />,
              headerTintColor: color
            }} 
            />
            <Tabs.Screen name='fruit' options={{
              title: "Fruits",
              tabBarBadge: 3,
              tabBarIcon: () => <Ionicons name='bulb' size={24} color={color} />,
              headerTintColor: color

            }} 
            />
            <Tabs.Screen name='personne' options={{
              title: "Profil",
              tabBarIcon: () => <Ionicons name='body' size={24} color={color} />,
              headerTintColor: color
            }} 
            />
            
        </Tabs>
    );
}

export default function TabsLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <TabLayout />
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})