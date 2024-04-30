import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, FlatList, Linking } from 'react-native';
import AttendeeCard from '../components/Attendees';
import { useNavigation } from '@react-navigation/native';

const attendees = [
    {
        id: '1',
        name: 'Emily Johnson',
        role: 'Chair of Finance',
        school: 'Wharton School',
        imageUrl: require('/Users/gaosd/Downloads/WorldSalonApp1/assets/Attendee 1.png'),
        messageUrl: 'https://example.com/messages/emilyjohnson'
      },
      {
        id: '2',
        name: 'Andrew Smith',
        role: 'CTO at TechStart',
        school: 'MIT',
        imageUrl:  require('/Users/gaosd/Downloads/WorldSalonApp1/assets/Attendee 2.png'),
        messageUrl: 'https://example.com/messages/andrewsmith'
      },
      {
        id: '3',
        name: 'Jessica Williams',
        role: 'Marketing Director',
        school: 'Harvard Business School',
        imageUrl: require('/Users/gaosd/Downloads/WorldSalonApp1/assets/Attendee 3.png'),
        messageUrl: 'https://example.com/messages/jessicawilliams'
      },
      {
        id: '4',
        name: 'James Brown',
        role: 'Product Manager',
        school: 'Stanford University',
        imageUrl: require('/Users/gaosd/Downloads/WorldSalonApp1/assets/Attendee 4.png'),
        messageUrl: 'https://example.com/messages/jamesbrown'
      },
  // Array of attendee objects, each with name, role, school, and image
];



const EventDetail = ({ route }) => {
  console.log("received prm", route.params)
  if (!route.params) {
    console.error("No parameters passed to EventDetail screen");
    return <Text>No event data available</Text>; // Display fallback text if no parameters were passed
  }
  
  const { item } = route.params;
  const navigation = useNavigation();
  
  const onRegisterPress = () => {
    console.log("press the button");
};
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={item.imageUrl} style={styles.eventImage} />
      </View>
    
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Event Details</Text>
        <Text style={styles.detailText}>Date: {item.date}</Text>
        <Text style={styles.detailText}>Location: {item.location}</Text>
        <TouchableOpacity style={styles.registerButton} onPress={onRegisterPress}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
      <Text style={styles.title}>Attendees</Text>
        <FlatList
          data={attendees}
          renderItem={({ item }) => <AttendeeCard attendee={item} />}
          keyExtractor={(attendee) => attendee.id.toString()}
          horizontal
        />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
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
    eventDetails: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    attendeeName: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
    attendeeRole: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    attendeeSchool: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    messageButton: {
        backgroundColor: '#000000',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 5,
      },
    registerButton: {
      backgroundColor: '#000000', // Button background color
      padding: 15,
      borderRadius: 20,
      alignItems: 'center',
      marginTop: 10,
    },
    registerButtonText: {
      color: '#fff', // Button text color
      fontSize: 16,
      fontWeight: 'bold',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
      },
    eventImage: {
      width: '100%',
      height: 200,
      marginBottom: 10,
    },
  // Add styles for container, eventSection, gallerySection, map, attendeeCard, etc.
  // You'll also need to style your register button, message button, and other elements.
});

export default EventDetail;
