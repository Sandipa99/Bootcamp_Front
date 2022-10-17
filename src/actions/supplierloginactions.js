import axios from "axios";
import Cookies from "universal-cookie";

// Register
export const registerAction = (body) => async (dispatch) => {
  console.log("farmerdetails" + body);
  const result = await axios.post(
    "http://localhost:8080/supplier/signup",
    body
  ).catch((error) => {
    console.log(error.response.data);
    console.log(error.response.status);
    if(error.response.status==400)
    {
      alert(error.response.data);
    }
  });

  console.log(result);
  //console.log(result.data);
  dispatch({
    type: "SUPPLIER_REGISTER",
    payload: result.data,
  }); 
  
};

export const loginAction = (login) => (dispatch) => {
    const cookies = new Cookies();
      axios
        .post("http://localhost:8080/supplier/signin", login)
        .then((res) => {
          
          cookies.set("name",res.data.name);
          console.log(cookies.get("name"));
           cookies.set("username", res.data.principal.username);
           cookies.set("role", res.data.authorities[0].authority);
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


