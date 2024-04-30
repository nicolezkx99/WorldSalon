import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AttendeeCard = ({ attendee }) => {
  const navigation = useNavigation(); // Correct usage of useNavigation hook

  return (
    <View style={styles.AttendeeCard}>  
    <Image source={attendee.imageUrl} style={styles.attendeeAvatar} />
        <Text style={styles.attendeeName}>{attendee.name}</Text>
        <Text style={styles.attendeeRole}>{attendee.role}</Text>
        <TouchableOpacity 
        style={styles.messageButton} 
        onPress={() => navigation.navigate('Chat', { name: attendee.name })}>
    <Text style={styles.messageButtonText}>Message</Text>
        </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    // Your styles remain unchanged
    AttendeeCard: {
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
      alignItems: 'center',
    },
    attendeeAvatar: {
      width: 50,
      height: 50,
      borderRadius: 100,
      marginBottom: 10,
      alignItems: 'center',
    },
    attendeeName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    attendeeRole: {
      fontSize: 14,
      color: '#666',
      marginBottom: 5,
    },
    messageButton: {
      backgroundColor: '#000000',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      alignItems: 'center',
      marginTop: 10,
    },
    messageButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
});

export default AttendeeCard;
