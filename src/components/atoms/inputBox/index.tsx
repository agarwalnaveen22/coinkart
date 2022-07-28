import React from 'react';
import {TextInput, TextStyle} from 'react-native';
import styles from './style';

type Props = {
  style?: TextStyle;
  textAlign?: 'center' | 'left' | 'right';
  value?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'phone-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
};

const InputBox = ({
  value,
  textAlign,
  onChangeText,
  style,
  keyboardType,
  placeholder,
}: Props) => {
  return (
    <TextInput
      value={value}
      textAlign={textAlign}
      onChangeText={onChangeText}
      style={[styles.container, style]}
      keyboardType={keyboardType}
      placeholder={placeholder}
    />
  );
};

export default InputBox;
