// import { createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import ProductSaga from "./ProductSaga";
import createSagaMiddleware from "redux-saga";

// const store = (RootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: RootReducer,
  middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(ProductSaga);
export default store;
