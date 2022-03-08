import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import * as GestureHandler from 'react-native-gesture-handler';

export const BaseButton = styled(GestureHandler.BaseButton)`
  border-radius: ${RFValue(35)}px;
  padding: 20px 35px;
  margin: 20px 0px;
  background-color: blueviolet;
`;

export const BorderlessButton = styled(GestureHandler.BorderlessButton)`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(35)}px;
  margin: 20px 0px;
  background-color: chocolate;
`;

export const RectButton = styled(GestureHandler.RectButton)`
  border-radius: ${RFValue(35)}px;
  padding: 20px 35px;
  margin: 20px 0px;
  background-color: cadetblue;
`;

export const Content = styled.View.attrs({
  accessible: true,
  accessibilityRole: 'button',
})``;

export const Subtitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: whitesmoke;
`;

export const ShowAction = styled.View`
  margin-top: ${RFValue(20)}px;
`;

export const ActionText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: brown;
`;
