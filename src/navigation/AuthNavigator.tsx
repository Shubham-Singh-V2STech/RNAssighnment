import { createStackNavigator } from "@react-navigation/stack";
import Employee from "../screens/Employee/Employee";
import { AddPost } from "../screens/AddPosts/AddPost";
import Home from "../screens/Home/Home";

const Stack = createStackNavigator();

export const AuthStack = () => {
	return (
    <Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Employee" component={Employee} />
			<Stack.Screen name="AddPost" component={AddPost} />
		</Stack.Navigator>
	)
}

export default AuthStack;
