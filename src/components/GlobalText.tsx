import React from 'react';
import { Text as RNText } from 'react-native';

export function Text(props: any) {
    return (
        <RNText {...props} style={[{ fontFamily: 'Montserrat_400Regular' }, props.style]}>
            {props.children}
        </RNText>
    );
}
