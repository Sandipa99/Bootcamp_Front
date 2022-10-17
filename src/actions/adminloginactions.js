import axios from "axios";
import Cookies from "universal-cookie";

export const loginAction = (login) => (dispatch) => {
    const cookies = new Cookies();
    axios
      .post("http://localhost:8080/admin/signin", login)
      .then((res) => {
        console.log("check");
        cookies.set("username", res.data.principal.username);
        cookies.set("role", res.data.authorities[0].authority);
        if (res.data.authorities[0].authority === "ROLE_ADMIN") {
          dispatch({
            type: "ADMIN_LOGIN",
            payload: res.data.authorities[0].authority,
          });
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
         alert("Invalid Credentials");
        dispatch({
          type: "ADMIN_ERR_RES",
          payload: error.response.data.message,
        });
      });
  };
  
  