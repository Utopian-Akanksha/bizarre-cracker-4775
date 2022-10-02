import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST,LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./action";
  
  export const reducer = (state, action) => {
    switch (action.type) {
    //   case "LOGIN_REQUEST": {
    //     return {
    //       ...state,
    //       isLoading: true
    //     };
    //   }
    //   case "LOGIN_SUCCESS": {
    //     return {
    //       ...state,
    //       isLoading: false,
    //       isAuth: true,
    //       token: action.payload.token
    //     };
    //   }
    //   case "LOGIN_FAILURE": {
    //     return {
    //       ...state,
    //       isLoading: false,
    //       isAuth: false
    //     };
    //   }
    //   case "LOGOUT_SUCCESS": {
    //     return {
    //       ...state,
    //       isLoading: false,
    //       isAuth: false,
    //       token: null
    //     };
    //   }
    case GET_PRODUCTS_REQUEST: {
        return {
          ...state,
          isDataLoading: true
        };
      }
      case GET_PRODUCTS_SUCCESS: {
        return {
          ...state,
          data: action.payload,
          isDataLoading: false
        };
      }
      case GET_PRODUCTS_FAILURE: {
        return {
          ...state,
          isDataLoading: false,
          isError: true
        };
      }
      default:
        return state;
    }
  };
