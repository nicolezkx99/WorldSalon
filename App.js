import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Register from './screens/Register';
import EventDetail from './screens/EventDetail';
import ChatScreen from './screens/ChatScreen';





const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="EventDetail" component={EventDetail} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        {/* Make sure no comments or non-Screen components are directly inside Navigator */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
