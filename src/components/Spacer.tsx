import React from 'react';
import { View } from 'react-native';
import { spacing } from '../core/theme';

type SpacerProps = {
  size: keyof typeof spacing;
  vertical?: boolean;
  horizontal?: boolean;
};

export const Spacer = ({ size, vertical = true, horizontal }: SpacerProps) => {
  const direction = getPaddingKey({ vertical, horizontal });

  return (
    <View
      style={{
        [direction]: spacing[size]
      }}
    />
  );
};

const getPaddingKey = ({
  vertical,
  horizontal
}: Pick<SpacerProps, 'horizontal' | 'vertical'>) => {
  if (horizontal) {
    return 'paddingLeft';
  }

  if (vertical) {
    return 'paddingTop';
  }

  return 'paddingTop';
};
