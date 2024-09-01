import {call, put, takeEvery} from 'redux-saga/effects';
import {
	createPostData,
	createPostDataFailure,
	createPostDataSuccess,
  deletePostData,
  deletePostDataFailure,
  deletePostDataSuccess,
  employeeDataFailure,
  employeeDataSuccess,
  requestEmployeeData,
  updatePostsData,
  updatePostsDataFailure,
  updatePostsDataSuccess,
} from '../slices/employee-slice';
import { createPost, deletePost, getEmployeeDataApi, updatePostAPI } from '../../api/services';

function* getEmployeeData(): Generator {
  try {
    const response = yield call(getEmployeeDataApi);		
		
    if (response) {
      yield put(
        employeeDataSuccess({
          data: response,
        }),
      );
    }
  } catch (e) {
    yield put(employeeDataFailure(e));
  }
}

export function* watchGetEmployeeData() {
  yield takeEvery(requestEmployeeData.type, getEmployeeData);
}

function* createEmployeeData(data: any): Generator {
  const PostData = data?.payload;
	try {
		const response = yield call(createPost, PostData);
    
		if(response) {
			yield put(createPostDataSuccess({
				data: response,
			}),
			);
		}
	} catch (e) {
		yield put(createPostDataFailure)
	}
}

export function* watchCreatePostData() {
	yield takeEvery(createPostData.type, createEmployeeData);
}

function* deletePostsData(payload: any): Generator {
  console.log('deletePostsData', payload?.payload);
  
  try {
    const response = yield call(deletePost, payload?.payload);
    
    if(response) {
      yield put(deletePostDataSuccess({
        data: payload?.payload,
      }),
      );
    }
  } catch(e) {
    yield put(deletePostDataFailure);
  }
}

export function* watchDeletePostData() {
  yield takeEvery(deletePostData.type, deletePostsData);
}

function* updatePost(data: any): Generator {  
  const PostUpdateData = data?.payload;
  try {
    const response = yield call(updatePostAPI, PostUpdateData);
    
    if(response) {
      yield put(updatePostsDataSuccess({
        data: data?.payload,
      }),
      );
    }
  } catch(e) {
    yield put(updatePostsDataFailure);
  }
}

export function* watchUpdatePostData() {
  yield takeEvery(updatePostsData.type, updatePost);
}