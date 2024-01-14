import { PRODUCT_LIST, SET_PRODUCT_LIST } from './Constant';
import { takeEvery, put } from 'redux-saga/effects';


function* getProducts() {
   let data = yield fetch("http://localhost:3000/products");
   data = yield data.json();
//    console.warn("The API Parsed data", data)
   yield put({type:SET_PRODUCT_LIST,data})
}

function* ProductSaga() {
yield takeEvery(PRODUCT_LIST, getProducts)
}
export default ProductSaga;