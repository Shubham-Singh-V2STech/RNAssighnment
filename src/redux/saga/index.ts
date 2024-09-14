import {all} from 'redux-saga/effects';
import { watchCreatePostData, watchDeletePostData, watchGetEmployeeData, watchUpdatePostData } from './employeeSaga';
import { watchSendMessage } from './chatSaga';

export default function* rootSaga() {
	yield all([
		watchGetEmployeeData(), 
		watchCreatePostData(), 
		watchDeletePostData(),
		watchUpdatePostData(),
		watchSendMessage(),
	]);
}