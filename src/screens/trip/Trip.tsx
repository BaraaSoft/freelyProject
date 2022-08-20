import React, {Fragment, useCallback, useEffect} from 'react';
import {Text, FlatList, ListRenderItemInfo} from 'react-native';
import {goTo, navigate} from '../../services/navigationService';
import {APP_SCREENS} from '../screens';
import {Container} from './Trip.style';
import Card, {CardProps} from '../../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import {RootDispatch, RootState} from '../../store';
import {getAllTrips} from '../../store/tripsSlice.slice';
import {LoadingView} from '../../components/LoadingView';

const Trip = () => {
  const dispatch = useDispatch<RootDispatch>();
  const {data, isError, loading} = useSelector(
    (state: RootState) => state.trips,
  );

  useEffect(() => {
    dispatch(getAllTrips());
    console.log('trip data ui:', data);
  }, []);

  const onCardPress = useCallback((item: any) => {
    navigate(APP_SCREENS.Stack.TripStack, APP_SCREENS.TripDetailsScreen, {
      tripId: item.id,
      tripName: item.name,
    });
  }, []);

  if (loading) return <LoadingView />;
  return (
    <Fragment>
      <Container>
        <FlatList<CardProps>
          refreshing={false}
          keyExtractor={item => item.id}
          style={{paddingVertical: 16, paddingHorizontal: 24}}
          data={data}
          renderItem={({item}: ListRenderItemInfo<CardProps>) => {
            return (
              <Card
                id={item.id}
                name={item.name}
                startDate={item.startDate}
                endDate={item.endDate}
                status={item.status}
                onPress={onCardPress}
              />
            );
          }}
        />
      </Container>
    </Fragment>
  );
};

export default Trip;
