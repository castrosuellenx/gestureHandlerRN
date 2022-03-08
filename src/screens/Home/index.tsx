import React from 'react';
import Buttons from '../../components/Buttons';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Home</S.Title>

      <Buttons />
    </S.Container>
  );
};

export default Home;
