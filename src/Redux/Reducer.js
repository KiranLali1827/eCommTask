import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./Constant";

export const cartData = (data = [], action) => {
  //   if (action.type === ADD_TO_CART) {
  //     console.warn("Reducer called", action);
  //     return action.data;
  //   } else {
  //     return "No action matched";
  //   }

  switch (action.type) {
    case ADD_TO_CART: {
      console.warn("ADD_TO_CART called", action);
      return [action.data, ...data];
    }
    case REMOVE_TO_CART: {
      // data.length = data.length ? data.length - 1 : [];
    //   console.warn("REMOVE_TO_CART called", action);
      const remainingItem = data.filter((item) => item.id!==action.data);
      console.warn("remainingItem REMOVE_TO_CART called", remainingItem);
      return [...remainingItem];
    }
    case EMPTY_CART: {
      console.warn("EMPTY_CART called", action);
      data = [];
      return [...data];
    }
    default:
      return data;
  }
};
