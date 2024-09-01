import React, { useEffect } from 'react'
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { deletePostData, requestEmployeeData } from '../../redux/slices/employee-slice';
import { employeestyles } from './employee-style';
import { FAB } from 'react-native-paper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';

const Employee = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const {employeeData} = useSelector((state: any) => state.employee);

	useEffect(() => {
		dispatch(requestEmployeeData());
	},[dispatch]);

	const handleDeletePress = (id: any) => {
    // Handle the delete press event, e.g., alert the id
		dispatch(deletePostData(id));
  };

  const renderRightActions = (id: number) => {
    return (
      <View style={employeestyles.swipeContainer}>
        <TouchableOpacity onPress={() => handleDeletePress(id)}>
          <Text style={employeestyles.swipeText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item }: any) => (
    <Swipeable
      renderRightActions={() => renderRightActions(item.id)}
    >
      <View style={employeestyles.card}>
        <Text style={employeestyles.name}>Name: {item.title}</Text>
        <Text>{item.body}</Text>
      </View>
    </Swipeable>
  );

	return (
    <View style={employeestyles.container}>
			<FlatList 
				data={employeeData}
				extraData={employeeData}
				renderItem={renderItem}
				keyExtractor={(item) => String(item.id)}
			/>

			<FAB
  			style={[employeestyles.fab]}
				small
        icon="plus"
        onPress={() => navigation.navigate('AddPost')}  // Navigate to AddPost screen
      />
		</View>
	)
}

export default Employee