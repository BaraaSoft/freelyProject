import React, {Component} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigator from './navigations/StackNavigator';
import {setTopLevelNavigator} from './services/navigationService';
import {colors} from './common/colors';
import {Provider} from 'react-redux';
import store from './store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.main.white,
  },
};
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer ref={setTopLevelNavigator} theme={theme}>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
