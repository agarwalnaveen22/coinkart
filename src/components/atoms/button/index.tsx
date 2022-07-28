import React from 'react';
import {Button} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const CButton = ({title, onPress, disabled = false}: Props) => {
  return <Button title={title} onPress={onPress} disabled={disabled} />;
};

export default CButton;
