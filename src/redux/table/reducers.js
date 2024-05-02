import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./action";

const initialState = {
  product: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setproduct":
      return {
        ...state, product: action.payload,
      }
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;

