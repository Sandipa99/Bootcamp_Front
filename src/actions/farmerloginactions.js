import axios from "axios";

// Register
export const registerAction = (farmer) => async (dispatch) => {
  const result = await axios.post(
    "http://localhost:8080/farmer/signup",
    farmer
  );
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "FARMER_REGISTER",
    payload: result.data,
  });
};

export const loginAction = (login) => (dispatch) => {
    axios
      .post("http://localhost:8080/farmer/signin", login)
      .then((res) => {
        // console.log(res);
        if(res.data[0].authority==='ROLE_FARMER')
        {
          dispatch({
            type: "FARMER_LOGIN",
            payload: res.data[0].authority,
          });
        }    
        else{
          alert('Invalid Credentials');
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
        dispatch({
          type: "FARMER_ERR_RES",
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
      type: "FARMER_LOGOUT",
      payload: result.data,
    });
  };