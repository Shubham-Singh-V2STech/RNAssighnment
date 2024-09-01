import React from 'react';
import { View, FlatList, Button, Text } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useThemeContext } from '../../context/ThemeContext';
import ToDoInput from '../../components/ToDoInput';
import ToDoItem from '../../components/ToDoItem';

const Home: React.FC = () => {
  const [todos, setTodos] = React.useState<string[]>([]);
  const { toggleTheme, theme } = useThemeContext();
  const currentTheme = useTheme();

  const addToDo = (text: string) => {
    setTodos([...todos, text]);
  };

  const removeToDo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <View style={{ flex: 1, backgroundColor: currentTheme.background }}>
      <Button title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Theme`} onPress={toggleTheme} />
      <ToDoInput onAdd={addToDo} />
      {todos.length === 0 ? (
        <Text>No Todos</Text>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ToDoItem text={item} onDelete={() => removeToDo(index)} />
          )}
        />
      )}
    </View>
  );
};

export default Home;