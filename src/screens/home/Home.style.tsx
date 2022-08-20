import {colors} from '../../common/colors';
import {View, Text} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  padding: 16px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Title = styled(Text)`
  font-size: 20px;
  font-weight: 400;
`;
