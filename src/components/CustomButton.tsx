import React from 'react';
import { Button, ButtonProps } from 'react-native-paper';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface CustomButtonProps extends ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, mode = 'contained', style, ...rest }) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      style={[styles.button, style]}
      {...rest}
    >
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default CustomButton;