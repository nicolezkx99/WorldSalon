// RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, Button, Alert, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
 

  const handleRegister = async () => {
    try {
      const response = await fetch('http://192.168.1.141:3000/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              fullName: fullName,
              email: email,
          }),
      });

      const json = await response.json();
      if (response.ok) {
          Alert.alert("Success", "You have registered successfully!");
      } else {
          Alert.alert("Failed", json.message);
      }
  } catch (error) {
      console.error('Failed to register:', error);
      Alert.alert("Error", "Failed to register. Please try again later.");
  }

    // Registration logic here
    console.log("Registration successful");
    navigation.navigate('Home'); // Navigate to the home screen after register
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join our event!</Text>
      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default RegisterScreen;
