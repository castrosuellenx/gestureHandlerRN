import React, { useState } from 'react';

import * as S from './styles';

const Buttons: React.FC = () => {
  const [actionText, setActionText] = useState(
    'Press a button to change the text!',
  );

  const onPressButton = (type: string) => {
    setActionText(`${type} was pressed`);
  };

  return (
    <>
      <S.BaseButton onPress={() => onPressButton('BaseButton')}>
        <S.Content>
          <S.Subtitle>Press</S.Subtitle>
        </S.Content>
      </S.BaseButton>

      <S.BorderlessButton onPress={() => onPressButton('BorderlessButton')}>
        <S.Content>
          <S.Subtitle>Press</S.Subtitle>
        </S.Content>
      </S.BorderlessButton>

      <S.RectButton onPress={() => onPressButton('RectButton')}>
        <S.Content>
          <S.Subtitle>Press</S.Subtitle>
        </S.Content>
      </S.RectButton>

      <S.ShowAction>
        <S.ActionText>{actionText}</S.ActionText>
      </S.ShowAction>
    </>
  );
};

export default Buttons;
