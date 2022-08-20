import {colors} from '../../common/colors';
import {View, Text} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  margin-top: 44px;
  padding: 16px;
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
`;

export const Title = styled(Text)`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.main.primary};
`;

export const Link = styled(Text)`
  font-weight: 400;
  font-size: 16;
  color: ${colors.main.link};
`;
