import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Button } from 'react-native';

interface ToDoItemProps {
  text: string;
  onDelete: () => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ text, onDelete }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>{text}</Text>
    <Button title="Delete" onPress={onDelete} color="#FF6347" />
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    flex: 1,
    marginRight: 10,
  },
});

export default ToDoItem;
