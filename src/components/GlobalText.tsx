import React from 'react';
import { Text as RNText } from 'react-native';

export function Text({ weight = 'regular', style, children, ...rest } : any) {
  const fontMap: any = {
    light: 'Montserrat_300Light',
    regular: 'Montserrat_400Regular',
    medium: 'Montserrat_500Medium',
    bold: 'Montserrat_700Bold',
  };

  return (
    <RNText {...rest} style={[{ fontFamily: fontMap[weight] }, style]}>
      {children}
    </RNText>
  );
}
