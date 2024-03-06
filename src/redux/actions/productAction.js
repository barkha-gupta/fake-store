import { Actiontypes } from "../constants/ation-types";

export const setProducts = (products) => {
  return {
    type: Actiontypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: Actiontypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: Actiontypes.REMOVE_SELECTED_PRODUCT,
  };
};
//action creators
//action always return an object - with type and payload(data)
