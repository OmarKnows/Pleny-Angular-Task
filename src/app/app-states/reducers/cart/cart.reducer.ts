import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  CART_FAIL,
  CART_REQUEST,
  CART_SUCCESS,
} from '../../types/cart/types';

export const cartReducer = (
  action: any,
  state: any = {
    loading: true,
    cart: {},
    cartItems: {},
    error: null,
  }
) => {
  switch (action.type) {
    case CART_REQUEST:
      return { loading: true };
    case CART_SUCCESS:
      return {
        loading: false,
        cart: action.payload,
        error: null,
      };
    case CART_FAIL:
      return {
        loading: false,
        cart: {},
        error: action.payload,
      };
    case ADD_TO_CART_REQUEST:
      return {
        loading: true,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        loading: false,
        cart: action.payload,
        error: null,
      };
    case ADD_TO_CART_FAIL:
      return {
        loading: false,
        cart: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
