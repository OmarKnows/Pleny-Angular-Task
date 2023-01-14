import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../../types/auth/types';

export const authReducer = (
  action: any,
  state: any = {
    loading: true,
    userInfo: {},
    error: null,
  }
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        loading: false,
        userInfo: {},
        error: action.payload,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
