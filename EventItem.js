import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const EventItem = ({ item, onPress, onRegisterPress }) => {
  return (
    <TouchableOpacity style={styles.eventItem} onPress={onPress}>
        <Image source={item.imageUrl} style={styles.eventImage} />
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDetails}>{item.date}</Text>
        <Text style={styles.eventDetails}>{item.location}</Text>
        <TouchableOpacity style={styles.registerButton} onPress={onRegisterPress}>
            <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    eventItem: {
      backgroundColor: '#f9f9f9',
      borderRadius: 8,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    eventImage: {
      width: '100%',
      height: 200,
      borderRadius: 8,
      marginBottom: 10,
    },
    eventTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    eventDetails: {
      fontSize: 14,
      color: '#666',
      marginBottom: 5,
    },
    registerButton: {
      backgroundColor: '#000000',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      alignItems: 'center',
      marginTop: 10,
    },
    registerButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
});

export default EventItem;