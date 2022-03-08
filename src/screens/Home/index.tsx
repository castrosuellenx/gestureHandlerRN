import React from 'react';
import GestureHandlerButtons from '../../components/Buttons/GestureHandlerButtons';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Home</S.Title>

      <GestureHandlerButtons />
    </S.Container>
  );
};

export default Home;
