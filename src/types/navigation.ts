import { PartialState, StackNavigationState, RouteProp } from "@react-navigation/native";
import { StackNavigationOptions, StackNavigationProp } from "@react-navigation/stack";

/**
 * NavigationProp: simply type shortcut to use in stack screens
 */
export type NavigationProp = StackNavigationProp<any>;

export type RouteParams = PartialState<StackNavigationState<any>>;

export type NavigationScreen = {
  route: RouteProp<any, never>;
  navigation: StackNavigationProp<any>;
};

export type NavigationOptions = StackNavigationOptions;
