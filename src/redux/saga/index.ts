import {all} from 'redux-saga/effects';
import { watchCreatePostData, watchDeletePostData, watchGetEmployeeData, watchUpdatePostData } from './employeeSaga';

export default function* rootSaga() {
	yield all([
		watchGetEmployeeData(), 
		watchCreatePostData(), 
		watchDeletePostData(),
		watchUpdatePostData(),
	]);
}