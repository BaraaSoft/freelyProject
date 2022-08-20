import {
  Animated,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components';
import {colors} from '../common/colors';

interface IconProps {
  focused: boolean;
}

const BOTTOM_PADDING = 12;
const TAB_BAR_HEIGHT = 72 + BOTTOM_PADDING;
const SCREEN_WIDTH = Dimensions.get('window').width;

export const TabBarContainer = styled(Animated.View)`
  flex-direction: row;
  background-color: ${colors.main.white};
  /* border-color: ${colors.main.grey5}; */
  color: ${colors.main.black10};
  /* border-top-width: 0.5px; */
  bottom: 0;
  height: ${TAB_BAR_HEIGHT}px;
  width: 100%;
  padding-bottom: ${BOTTOM_PADDING}px;
  justify-content: space-between;
`;

export const TabButton = styled(TouchableOpacity)<IconProps>`
  align-items: center;
  width: ${SCREEN_WIDTH / 2};
  height: 100%;
  justify-content: center;
`;

export const TabLabelText = styled(Text)<IconProps>`
  color: ${props => (props.focused ? colors.main.primary : colors.main.gray)};
  font-size: 12px;
  margin-top: 8px;
`;

export const TabIcon = styled(Image)<IconProps>`
  width: 24px;
  height: 24px;
`;

export const iconStyling = StyleSheet.create({
  scanStyle: {
    backgroundColor: colors.main.primary,
    borderRadius: 100,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.main.primary,
    shadowColor: colors.main.primary,
    shadowOffset: {width: -1, height: 5},
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
});

export const screenStyling = StyleSheet.create({
  tabbarStyle: {
    shadowColor: colors.main.gray,
    shadowOffset: {width: -2, height: -6},
    shadowOpacity: 0.2,
    shadowRadius: 15
  },
});
