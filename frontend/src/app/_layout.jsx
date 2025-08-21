// import { View, Text } from 'react-native'
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";





const RootLayout = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor: colorScheme === "dark" ? "#333232ff" : "white",}]}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaView>
  )
}
  
export default RootLayout   

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: '#525050ff',
    color: 'white',
  }
});