import {useEffect, useState} from 'react';
import {AppState, AppStateStatus} from 'react-native';

export type FreelyAppState = 'idle' | 'comming_from_background';
export const useAppState = () => {
  const [appState, setAppState] = useState(AppState.currentState);
  const [isCommingFromBackground, setCommingFromBackground] = useState(false);

  const _handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      setCommingFromBackground(true);
    }
    setAppState(nextAppState);
  };
  useEffect(() => {
    const currState = AppState.addEventListener(
      'change',
      _handleAppStateChange,
    );

    return () => {
      currState.remove();
    };
  }, [appState]);

  return isCommingFromBackground;
};
