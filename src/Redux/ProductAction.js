import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./Constant";

export const productList = () => {
   
  console.warn("Action PRODUCT_LIST called!");
  return {
    type: PRODUCT_LIST
  };
};



