import axios from "axios";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchProductRequest = () => ({
  type: FETCH_REQUEST,
});

export const fetchProductSuccess = (products) => ({
  type: FETCH_SUCCESS,
  payload: products,
});

export const fetchProductFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});

export const fetchAllProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductRequest());
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;
      console.log(data, "SSS");
      dispatch(fetchProductSuccess(data));
      console.log(data, "SSSSSS");
    } catch (error) {
      dispatch(fetchProductFailure(error.message));
    }
  };
};
