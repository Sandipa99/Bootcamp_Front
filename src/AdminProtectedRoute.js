import React from 'react';
import Cookies from "universal-cookie";

import {Navigate} from 'react-router-dom'

const useAuth=()=>{
  const cookies=new Cookies();
  const user=cookies.get("role");
  if(user==="ROLE_ADMIN"){
    return true
  } else {
    return false
  }
}

function  AdminProtectedRoute({ children }){

  const auth=useAuth()
  console.log("Is User Login?", auth);
  return auth?children: <Navigate to="/admin"/>
}

export default AdminProtectedRoute;