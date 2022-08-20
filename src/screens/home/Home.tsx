import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {goTo, navigate} from '../../services/navigationService';
import {APP_SCREENS} from '../screens';
import {Container, Title} from './Home.style';

const Home = () => {
  return (
    <Container>
      <Title>Home screen</Title>
    </Container>
  );
};

export default Home;
