import React from 'react';
import {Text, TextStyle} from 'react-native';

type Props = {
  text: string | number;
  style?: TextStyle;
};

const Label = ({text, style}: Props) => {
  return <Text style={style}>{text}</Text>;
};

export default Label;
