import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {goTo, navigate} from '../../services/navigationService';
import {APP_SCREENS} from '../screens';
import {Container, Title, Link} from './TripDetails.style';

export const navigationOptions = () => {
  return {
    headerTitle: 'Trip',
    headerShown: true,
    isVisible: false,
  };
};

const TripDetails = () => {
  return (
    <Container>
      <Title>Trips screen</Title>
    </Container>
  );
};

export default TripDetails;
