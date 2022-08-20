import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/Home';
import {APP_SCREENS} from '../../screens/screens';
import TabBar from '../../components/TabBar';
import TripStack from '../../navigations/stacks/TripStack';
// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator initialRouteName={APP_SCREENS.HomeScreen} tabBar={TabBar}>
      <Tab.Screen
        component={Home}
        name={APP_SCREENS.HomeScreen}
        // options={navigationOptions}
        options={{headerShown: false}}
      />
      <Tab.Screen
        component={TripStack}
        name={APP_SCREENS.TripScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
