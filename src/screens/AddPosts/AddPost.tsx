import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import { customButtonStyles } from '../../components/custom-button-style';
import { isEmpty } from '../../utils/Validations';
import { useDispatch } from 'react-redux';
import { createPostData, updatePostsData } from '../../redux/slices/employee-slice';

export const AddPost = () => {
	const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
	const [userId, setUserId] = useState(1);

  const handlePost = () => {
    if (isEmpty(title)) {
      Alert.alert('Validation Error', 'Title cannot be empty.');
      return;
    }
    
    if (isEmpty(body)) {
      Alert.alert('Validation Error', 'Body cannot be empty.');
      return;
    }
    dispatch(createPostData({ title, body, userId }));
  };

  const handlePostUpdate = () => {
    if (isEmpty(title)) {
      Alert.alert('Validation Error', 'Title cannot be empty.');
      return;
    }
    
    if (isEmpty(body)) {
      Alert.alert('Validation Error', 'Body cannot be empty.');
      return;
    }
    dispatch(updatePostsData({ title, body, userId }));
  }

  return (
    <View style={customButtonStyles.container}>
      <Text style={customButtonStyles.header}>Add Post</Text>
      <TextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
        mode="outlined"
        style={customButtonStyles.input}
      />
      <TextInput
        label="Body"
        value={body}
        onChangeText={setBody}
        mode="outlined"
        multiline
        numberOfLines={5}
        style={[customButtonStyles.input, customButtonStyles.bodyInput]}
      />
       <CustomButton 
        title="Submit" 
        onPress={handlePost} 
        style={customButtonStyles.button}
       >
				Submit
			 </CustomButton>

       <CustomButton 
        title="Static Update Post Test" 
        onPress={handlePostUpdate} 
        style={customButtonStyles.button}
       >
				Static Update Post Test
			 </CustomButton>
    </View>
  );
};

export default AddPost;
