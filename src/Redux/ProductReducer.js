import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./Constant";

export const productData = (data = [], action) => {
switch (action.type) {
    
    case SET_PRODUCT_LIST : {
        console.warn("PRODUCT_LIST called in Product Reducer", action);
        return [...action.data]
    }
    
    default :
    return data;
}
}