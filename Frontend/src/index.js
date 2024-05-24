import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import productsReducer, { productsFetch } from "./Features/ProductsSlice"
import {ProductsApi} from "./Features/ProductsAPI"
import CartReducer, { getTotals } from './Features/cartSlice';

const store = configureStore({
  reducer:{
    products:productsReducer,
    [ProductsApi.reducerPath]:ProductsApi.reducer,
    cart:CartReducer,
  },
  middleware:(getDefaultMiddleware) => {
   return getDefaultMiddleware().concat(ProductsApi.middleware);
  },
})

store.dispatch(productsFetch());
store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>
);

