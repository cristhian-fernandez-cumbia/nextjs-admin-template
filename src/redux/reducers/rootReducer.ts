import { combineReducers } from '@reduxjs/toolkit';
import productReducer from '../slices/productSlice';
import userReducer from '../slices/userSlice';
import { productApi, userApi } from '@/redux/apis';

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  [productApi.reducerPath]: productApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

export default rootReducer;