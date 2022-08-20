import {
  CommonActions,
  NavigationState,
  NavigationContainerRef,
} from '@react-navigation/native';
import {RouteParams} from '../types/navigation';

export let CURRENT_STACK = '';

export let navigatorRef: NavigationContainerRef<any> | null = null;

export const updateCurrentScreen = (
  currentState: NavigationState | undefined,
) => {
  if (currentState) {
    CURRENT_STACK = currentState.routes[currentState.index].name;
  }
};

export const getActiveRouteName = (navigationState: any): string | null => {
  if (!navigationState) {
    return null;
  }

  const route = navigationState.routes[navigationState.index];

  // dive into nested navigators
  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name;
};

export const getParam = (
  params: undefined | {[key: string]: any},
  field: string,
  defaultValue: any,
) => {
  if (!params || !params[field]) {
    return defaultValue;
  }

  return params[field];
};

export const resetNavigation = (route: RouteParams) => {
  if (navigatorRef) {
    navigatorRef.reset(route);
  }
};

// Used to navigate screens when a file doesn't have access to the navigation prop
// e.g. Used in services/notifications to navigate after a notification is opened
// Also can be used to navigate between stacks without losing screen history
export const navigate = (
  stackName: string,
  routeName?: string,
  params?: any,
) => {
  if (!navigatorRef) {
    return null;
  }

  if (routeName) {
    navigatorRef.navigate(stackName, {
      screen: routeName,
      params,
    });
  } else {
    navigatorRef.navigate(stackName, params);
  }
};

// Simple curry of navigate
// Useful in onPress properties
export const goTo = (screen: string, props?: any) => () =>
  navigate(screen, undefined, props);

/*
 * Allows for navigation to a screen nested within other stacks
 * If the screen you need to navigate to doesn't exist within the current screens stack, use this
 * Also used for clearing previous screen history
 * E.g. stackNavigation("MainStack", "TabStack", "SettingsScreen")
 */
export const stackNavigation = (screens: string[], params?: any) => {
  if (!navigatorRef) {
    return null;
  }

  let parentRoute: any | undefined;

  // Array spread stops function from reversing the array passed in params
  [...screens].reverse().forEach(screen => {
    const route = {
      params,
      name: screen,
      state: parentRoute
        ? {
            routes: [parentRoute],
          }
        : undefined,
    };

    parentRoute = route;
  });

  if (parentRoute) {
    navigatorRef.dispatch(
      CommonActions.reset({
        routes: [parentRoute],
        index: 0,
      }),
    );
  }
};

// Used in App.tsx to create a ref to the parent Higher Order Navigation Component
// Should not be used elsewhere
export const setTopLevelNavigator = (ref: NavigationContainerRef<any>) => {
  navigatorRef = ref;
};
