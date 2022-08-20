import {colors} from '../common/colors';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components';

export const Styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textXLStyle: {
    marginVertical: 32,
    fontSize: 20,
    fontWeight: '900',
    color: colors.main.primary,
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
