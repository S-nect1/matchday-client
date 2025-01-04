import React from 'react';
import styled from 'styled-components/native';
import { Icons, IconKey } from '@assets/icons';

type CommonIconProps = {
  iconKey: IconKey;
  size?: number;
  onPress?: () => void;
};

const S = {
  IconContainer: styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
  `,
  IconImage: styled.Image<{ size: number }>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    resize-mode: contain;
  `,
};

const CommonIcon = ({ iconKey, size = 24, onPress }: CommonIconProps) => {
  return (
    <S.IconContainer onPress={onPress}>
      <S.IconImage source={Icons[iconKey]} size={size} />
    </S.IconContainer>
  );
};

export default CommonIcon;
