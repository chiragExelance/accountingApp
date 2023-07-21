import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './rootNavigation';

// screens
import Homescreen from '../screen/Home/Homescreen';
import EditScrreen from '../screen/Home/EditScrreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen
        name="EditScrreen"
        component={EditScrreen}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
