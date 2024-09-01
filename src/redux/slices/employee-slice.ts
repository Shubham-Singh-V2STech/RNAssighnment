import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	employeeData: [],
	loading: false,
	error: '',
}

const employee = createSlice({
	name: 'employee',
	initialState,
	reducers: {
		// Get Operations
		requestEmployeeData: state => {
			state.loading = true;
		},
		employeeDataSuccess: (state, action) => {
			state.loading = false;
			state.employeeData = action.payload.data;
			state.error = '';
		},
		employeeDataFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		//Create Operations
		createPostData: (state, action) => {			
			state.loading = true;
		},
		createPostDataSuccess: (state, action) => {
			state.loading = false;
			state.employeeData = action.payload.data;
			state.error = '';
		},
		createPostDataFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		//Delete Operations
		deletePostData: state => {
			state.loading = true;
		},
		deletePostDataSuccess: (state, action) => {
			state.loading = false;
			state.employeeData = state.employeeData.filter(item => item.id !== action.payload.data);			
			state.error = '';
		},
		deletePostDataFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		//Update Operations
		updatePostsData: (state, action) => {
			state.loading = true;
		},
		updatePostsDataSuccess: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		updatePostsDataFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		}
	},
});

export default employee.reducer;
export const {
	requestEmployeeData, 
	employeeDataSuccess, 
	employeeDataFailure, 
	createPostData, 
	createPostDataSuccess, 
	createPostDataFailure,
	deletePostData,
	deletePostDataSuccess,
	deletePostDataFailure,
	updatePostsData,
	updatePostsDataSuccess,
	updatePostsDataFailure,
} = employee.actions;