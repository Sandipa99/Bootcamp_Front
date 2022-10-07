import axios from "axios";

// Register
export const registerAction = (supplier) => async (dispatch) => {
  const result = await axios.post(
    "http://localhost:8080/supplier/signup",
    supplier
  );
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "SUPPLIER_REGISTER",
    payload: result.data,
  });
};

export const loginAction = (login) => (dispatch) => {
    axios
      .post("http://localhost:8080/supplier/signin", login)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "SUPPLIER_LOGIN",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error.response.data.message);
        dispatch({
          type: "SUPPLIER_ERR_RES",
          payload: error.response.data.message,
        });
      });
  };
  
  // logout action
  export const logoutAction = () => async (dispatch) => {
    const result = await axios.post(`http://localhost:8080/logout`);
    console.log(result);
    console.log(result.data);
    dispatch({
      type: "SUPPLIER_LOGOUT",
      payload: result.data,
    });
  };