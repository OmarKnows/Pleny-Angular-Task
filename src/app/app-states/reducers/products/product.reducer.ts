import {
  PRODUCTS_FAIL,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
} from '../../types/products/types';

export const productsReducer = (
  action: any,
  state: any = {
    loading: true,
    productsResponse: [],
    categoriesResponse: [],
    error: null,
  }
) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case PRODUCTS_SUCCESS:
      return {
        loading: false,
        productsResponse: action.payload,
        error: null,
      };
    case PRODUCTS_FAIL:
      return {
        loading: false,
        productsResponse: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
