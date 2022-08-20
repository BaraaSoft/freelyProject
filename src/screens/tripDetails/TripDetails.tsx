import React, {useEffect, useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {goTo, navigate} from '../../services/navigationService';
import {APP_SCREENS} from '../screens';
import {Container, Title, Link} from './TripDetails.style';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

export const navigationOptions = ({navigation, route}: any) => {
  const {tripId, tripName} = route.params;
  return {
    headerTitle: tripName,
    headerShown: true,
    isVisible: false,
  };
};
const TripDetails = ({navigation, route}: any) => {
  const {data, isError, loading} = useSelector(
    (state: RootState) => state.trips,
  );
  const {destinations} = useMemo(() => {
    const {tripId, tripName} = route.params;
    return data.filter((x: any) => x.id == tripId)[0];
  }, [route.params?.tripId]);

  return (
    <Container>
      <View>
        {destinations.map((name: string) => (
          <Title>{name}</Title>
        ))}
      </View>
    </Container>
  );
};

export default TripDetails;
