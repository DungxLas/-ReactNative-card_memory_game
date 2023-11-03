import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import StartScreen from './screens/start_creen';
import PlayScreen from './screens/play_screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="startScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="startScreen" component={StartScreen} />
        <Stack.Screen name="playScreen" component={PlayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
