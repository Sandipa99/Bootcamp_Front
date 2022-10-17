import React from 'react';
import Cookies from "universal-cookie";

import {Navigate} from 'react-router-dom'

const useAuthenticate=()=>{
  const cookies=new Cookies();
  const user=cookies.get("role");
  if(user==="ROLE_SUPPLIER"){
    return true
  } else {
    return false
  }
}

function  SupplierProtectedRoute({ children }){

  const auth=useAuthenticate()
  console.log("Is User Login?", auth);
  return auth?children: <Navigate to="/supplier"/>
}

export default SupplierProtectedRoute;