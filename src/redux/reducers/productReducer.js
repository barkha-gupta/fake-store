import { Actiontypes } from "../constants/ation-types";

const initailState = {
  products: [],
};
export const productReducer = (state = initailState, action) => {
  switch (action.type) {
    case Actiontypes.SET_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case Actiontypes.SELECTED_PRODUCT:
      return { ...state, ...action.payload };
    case Actiontypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
