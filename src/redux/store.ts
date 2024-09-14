import {configureStore, combineReducers} from '@reduxjs/toolkit';
import employee from './slices/employee-slice';  
import chatReducer from './slices/chat-Slice';   
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

// Combine your reducers
const rootReducer = combineReducers({
  employee,
  chat: chatReducer,
});

// Configure persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['chat', 'employee'],  // Specify the slices you want to persist
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializableCheck for redux-persist
    }).concat(sagaMiddleware), // Add saga middleware
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

// Export types for usage in the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;