import React, { useState } from 'react';
import { FlatList, View, StyleSheet,TouchableOpacity,Text } from 'react-native';
import EventItem from '../components/EventItem';
import { useNavigation } from '@react-navigation/native';

const eventData = [
  {
    id: '1',
    title: 'Global Future Conference 2024',
    date: 'Sat, Jan 26 - 4:00 PM GMT',
    location: 'Harvard Club (NYC), 35W 44th St, New York, NY 10036',
    participants: ['Andrew', '+12'],
    imageUrl: require('/Users/gaosd/Downloads/WorldSalonApp1/assets/1.png'), // Replace with your image URL
  },
  {
    id: '2',
    title: 'Tech Innovators Meetup',
    date: 'Fri, Feb 10 - 6:00 PM GMT',
    location: 'Tech Park, 123 Innovation Drive, San Francisco, CA',
    participants: ['Sam', '+8'],
    imageUrl: require('/Users/gaosd/Downloads/WorldSalonApp1/assets/2.png'), // Another image for the second event
  },
  {
    id: '3',
    title: 'Design & Creativity Workshop',
    date: 'Thu, Mar 5 - 1:00 PM GMT',
    location: 'Design Hub, 45 Art St, Los Angeles, CA',
    participants: ['Alex', '+5'],
    imageUrl: require('/Users/gaosd/Downloads/WorldSalonApp1/assets/3.jpg'), // And another one for the third event
  },
]

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePressItem = (item) => {
    navigation.navigate('EventDetail', { item });
  };

  const handleRegisterPress = (event) => {
    event.stopPropagation();  
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={eventData}
        renderItem={({ item }) => (
          <EventItem
            item={item}
            onPress={() => handlePressItem(item)}
            onRegisterPress={(event) => handleRegisterPress(event)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};


// Place your styles here
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', // Background color for the whole screen
    },
    content: {
      padding: 20, // Space inside the container
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333', // Color for the title text
      marginBottom: 20, // Space below the title
    },
    subtitle: {
      fontSize: 18,
      color: '#666', // Color for subtitle text
      marginBottom: 10, // Space below the subtitle
    },
    card: {
      backgroundColor: '#f9f9f9', // Background color for cards
      borderRadius: 8,
      padding: 20,
      marginBottom: 20, // Space between cards
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10, // Space below the card title
    },
    cardContent: {
      fontSize: 16,
      color: '#666', // Color for card content text
    },
    button: {
      backgroundColor: '#ff5252', // Button background color
      padding: 15,
      borderRadius: 20,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff', // Button text color
      fontSize: 16,
      fontWeight: 'bold',
    },
    // Add more styles as needed for other elements in your HomeScreen
  });
  

export default HomeScreen;
