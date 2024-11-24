import { combineReducers } from '@reduxjs/toolkit';
import productReducer from '../slices/productSlice';
import userReducer from '../slices/userSlice';
import sidebarReducer from '../slices/sidebarSlice';
import { productApi, userApi, moduleApi } from '@/redux/apis';

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  sidebar: sidebarReducer,
  [productApi.reducerPath]: productApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [moduleApi.reducerPath]: moduleApi.reducer,
});

export default rootReducer;