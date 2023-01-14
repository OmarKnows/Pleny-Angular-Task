import {
  PRODUCTS_FAIL,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  SEARCH_FAIL,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  FILTER_FAIL,
  FILTER_REQUEST,
  FILTER_SUCCESS,
} from '../../types/products/types';

export const productsReducer = (
  action: any,
  state: any = {
    loading: true,
    productsResponse: [],
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
    case SEARCH_REQUEST:
      return { ...state, loading: true };
    case SEARCH_SUCCESS:
      return {
        loading: false,
        productsResponse: action.payload,
        error: null,
      };
    case SEARCH_FAIL:
      return {
        loading: false,
        productsResponse: [],
        error: action.payload,
      };
    case FILTER_REQUEST:
      return { ...state, loading: true };
    case FILTER_SUCCESS:
      return {
        loading: false,
        productsResponse: action.payload,
        error: null,
      };
    case FILTER_FAIL:
      return {
        loading: false,
        productsResponse: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
