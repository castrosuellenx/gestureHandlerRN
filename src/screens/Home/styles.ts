import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-weight: bold;
  color: brown;
  margin-bottom: ${RFValue(20)}px;
`;
