import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('(tabs)/ask_me')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>AI Screen</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('(tabs)/ask_me_upload')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>AI Screen Modal</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});
