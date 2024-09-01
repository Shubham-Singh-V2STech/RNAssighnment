import React, { useRef } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

interface ToDoInputProps {
  onAdd: (text: string) => void;
}

const ToDoInput: React.FC<ToDoInputProps> = ({ onAdd }) => {
  const inputRef = useRef<TextInput>(null);
  const [value, setValue] = React.useState('');

  const handleAdd = () => {
    if (value.trim()) {
      onAdd(value.trim());
      setValue('');
      inputRef.current?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Add new to-do"
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
  },
});

export default ToDoInput;