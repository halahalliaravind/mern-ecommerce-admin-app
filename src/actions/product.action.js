import axios from "../helpers/axios";

export const addProduct = (form) => {
  return async (dispatch) => {
    // dispatch({
    //     type:
    // })
    const res = await axios.post(`/product/create`, form);
    console.log(res);
  };
};

// export const addCategory = (form) => {
//     return async (dispatch) => {
//       dispatch({ type: categoryConstants.ADD_NEW_CATEGORIES_REQUEST });
//       const res = await axios.post(`/category/create`, form);
//       if (res.status === 201) {
//         dispatch({
//           type: categoryConstants.ADD_NEW_CATEGORIES_SUCCESS,
//           payload: { category: res.data.category },
//         });
//       } else {
//         dispatch({
//           type: categoryConstants.ADD_NEW_CATEGORIES_FAILURE,
//           payload: res.data.error,
//         });
//       }
//       console.log(res);
//     };
//   };
