import { Alert } from 'react-native';
import { axiosInstance } from '../../config/axiosConfig';
import {Posts, employees, user} from '../endpoints';

const getEmployeeDataApi = async () => {
  try {
    const response = await axiosInstance.get(Posts);
		
    return response.data;
  } catch (e) {
    console.log('Error calling getEmployee api', e);
  }
};

const createPost = async (data : any) => {
	try {		
		const response = await axiosInstance.post(Posts, data);
		if (response?.data?.id == 101) {
			Alert.alert("Post published successfully");
		}
		
		return response.data;
	} catch(e) {
		console.log('Error calling createPost api', e);
	}
};

const deletePost = async(id: any) => {	
	try{
		const response = await axiosInstance.delete(`${Posts}/${id}`);
		Alert.alert("Post deleted successfully");
		return response.data;
	} catch(e)  {
		console.log('Error calling deletePost api',e);
	}
}

const updatePostAPI = async(data: any) => {	
	try{
		const response = await axiosInstance.put(`${Posts}/${data?.userId}`,data);
		Alert.alert("Post Updated successfully");
		console.log("updatePostAPI", response.data);
		return response.data;
	} catch(e) {
		console.log('Error calling updatePost api',e);
	}
}



export {getEmployeeDataApi, createPost, deletePost, updatePostAPI};
