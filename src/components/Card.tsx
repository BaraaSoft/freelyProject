import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Styles} from './Card.style';

export interface CardProps {
  id: string;
  isHighlighted?: boolean;
  name: string;
  startDate: string;
  endDate: string;
  status: 'NOT_STARTED' | 'STARTED' | 'FINISHED';
  onPress?: ({id, name}: {id: string; name: string}) => void;
}

const Card = ({
  isHighlighted,
  name,
  startDate,
  endDate,
  status,
  onPress,
  id,
}: CardProps) => {
  return (
    <TouchableOpacity key={id} onPress={() => onPress?.call(null, {id, name})}>
      <View
        key={id}
        style={[
          Styles.containerStyle,
          isHighlighted ? Styles.containerHighlightedStyle : {},
        ]}>
        <Text style={[Styles.textXLStyle]}> {name}</Text>
        <View style={Styles.dateContainerStyle}>
          <Text style={[Styles.textLGStyle]}> {startDate}</Text>
          <Text style={[Styles.textLGStyle]}> {endDate}</Text>
        </View>
        <Text style={[Styles.textSMStyle]}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
