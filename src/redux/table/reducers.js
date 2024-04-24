import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./action";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SUCCESS:
      console.log(action.payload, "reducver");
      return {
        ...state,
        loading: false,
        products: action.payload,
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

