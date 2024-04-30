import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.greeting}>Good Morning, Andrew!</Text>
    {/* Icons and search bar can be added here as well */}
  </View>
);

// Place your styles here
const styles = StyleSheet.create({
    header: {
        padding: 20,
        paddingTop: 50, 
        backgroundColor: '#eee', // Use your desired color
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    greeting: {
        fontSize: 26,
        fontWeight: 'bold',
      },
      searchSection: {
        flexDirection: 'row', // Aligns the icon and the input field horizontally
        alignItems: 'center', // Centers them vertically
        backgroundColor: '#f0f0f0', // Or any other background color
        borderRadius: 20, // Gives rounded corners
        paddingHorizontal: 10, // Optional: Adds some spacing inside the edges
        marginHorizontal: 20, // Spacing from the sides of the screen
        marginTop: 10,
        marginBottom: 20,
        // You might want to add shadow or elevation here for styling
      },
      searchIcon: {
        marginRight: 10, // Adds some margin between the icon and the input text
      },
      searchInput: {
        flex: 1, // Takes up the remaining space in the flexDirection 'row'
        paddingVertical: 10, 
      },
    });

export default Header;