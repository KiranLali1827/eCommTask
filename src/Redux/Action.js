import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./Constant";

export const addtoCart = (propdata) => {
  console.warn("Action AddtoCart called!", propdata);
  return {
    type: ADD_TO_CART,
    data: propdata,
  };
};

export const removeFromCart = (propdata) => {
  console.warn("Action RemoveFromCart called!", propdata);
  return {
    type: REMOVE_TO_CART,
    data: propdata,
  };
};

export const emptyFromCart = () => {
  console.warn("Action EmptyFromCart called!");
  return {
    type: EMPTY_CART
  };
};
