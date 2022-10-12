import axios from "axios";

// Register
export const registerAction = (body) => async (dispatch) => {
  console.log("farmerdetails" + body);
  const result = await axios.post(
    "http://localhost:8080/supplier/signup",
    body
  );
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "SUPPLIER_REGISTER",
    payload: result.data,
  });
};

export const loginAction = (login) => (dispatch) => {
  //  const cookies = new Cookies();
      axios
        .post("http://localhost:8080/supplier/signin", login)
        .then((res) => {
          console.log(res);
   //        cookies.set("username", res.data.principal.username);
    //       console.log(cookies.get("username"));
          if(res.data.authorities[0].authority==='ROLE_SUPPLIER')
          {
            dispatch({
              type: "SUPPLIER_LOGIN",
              payload: res.data.authorities[0].authority,
            });
          }    
          else{
            alert('Invalid Credentials');
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
          alert("Invalid Credentials");
          dispatch({
            type: "SUPPLIER_ERR_RES",
            payload: error.response.data.message,
          });
        });
    };

// export const loginAction = (login) => (dispatch) => {
//   axios
//     .post("http://localhost:8080/supplier/signin", login)
//     .then((res) => {
//       console.log(res);
//       dispatch({
//         type: "SUPPLIER_LOGIN",
//         payload: res.data,
//       });
//     })
//     .catch((error) => {
//       console.log(error.response.data.message);
//       dispatch({
//         type: "SUPPLIER_ERR_RES",
//         payload: error.response.data.message,
//       });
//     });
// };

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
