import {colors} from '../common/colors';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components';

// export const Container = styled(View)`
//   padding: 16px;
//   align-self: stretch;
//   justify-content: center;
//   align-items: center;
//   /* flex: 1; */
//   margin-left: 44px;
//   margin-right: 44px;
//   box-shadow: 10px 10px 17px -12px rgba(0, 0, 0, 0.75);
// `;

export const Styles = StyleSheet.create({
  containerStyle: {
    height: 162,
    alignSelf: 'stretch',
    backgroundColor: colors.app.TRIP_CARD_BACKGROUND,
    borderRadius: 8,
    shadowColor: colors.main.gray,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 3,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
  },
  containerHighlightedStyle: {
    backgroundColor: colors.app.TRIP_CARD_BACKGROUND_HIGHLIGHTED,
  },
  dateContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 26,

    marginRight: '30%',
  },
  textXLStyle: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.app.TEXT,
    marginBottom: 16,
  },
  textLGStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.app.TEXT,
  },
  textSMStyle: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.app.TEXT,
    alignSelf: 'flex-end',
  },
});
