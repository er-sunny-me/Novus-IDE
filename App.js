import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello from Novus IDE! 🚀</Text>
      <Text style={styles.subtitle}>This is a test Expo app.</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Click Me" 
          onPress={() => Alert.alert("Success!", "Novus IDE Expo integration is working perfectly!")} 
          color="#6C63FF"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#A0A0A0',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    borderRadius: 8,
    overflow: 'hidden',
  }
});
