import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Styles} from './LoadingView.style';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../common/colors';

//Feather
export const LoadingView = () => {
  return (
    <View style={Styles.containerStyle}>
      <Icon name="loader" size={30} color={colors.main.primary} />
      <Text style={Styles.textXLStyle}>Loading</Text>
    </View>
  );
};
