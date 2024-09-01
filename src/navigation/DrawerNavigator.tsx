import React from 'react';
import Home from '../screens/Home/Home';
import Employee from '../screens/Employee/Employee';
import { AddPost } from '../screens/AddPosts/AddPost';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={Home} />
				<Drawer.Screen name="Employee" component={Employee} />
				<Drawer.Screen name="AddPost" component={AddPost} />
			</Drawer.Navigator>
  );
};

export default DrawerNavigator;
