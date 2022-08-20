import {colors} from '../../common/colors';
import {View, Text} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  margin-top: 44px;
  align-self: stretch;
`;

export const Title = styled(Text)`
  font-size: 20;
  font-weight: 400;
`;

export const Link = styled(Text)`
  font-weight: 400;
  font-size: 16;
  color: ${colors.main.link};
`;
