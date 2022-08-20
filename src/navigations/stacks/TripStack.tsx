import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {APP_SCREENS} from '../../screens/screens';
import TripScreen from '../../screens/trip/Trip';
import TripDetailsScreen, {
  navigationOptions,
} from '../../screens/tripDetails/TripDetails';

const Stack = createStackNavigator();

const TripStack = () => {
  return (
    <Stack.Navigator initialRouteName={APP_SCREENS.TripScreen}>
      <Stack.Screen
        name={APP_SCREENS.TripScreen}
        component={TripScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={APP_SCREENS.TripDetailsScreen}
        component={TripDetailsScreen}
        options={navigationOptions}
      />
    </Stack.Navigator>
  );
};

export default TripStack;
