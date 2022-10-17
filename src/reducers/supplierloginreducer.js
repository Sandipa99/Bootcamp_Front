import { useNavigate } from "react-router";

const initialState = {
    supplier: {},
    login: {},
    errMsg: "",
  };
  
  export const supplierLoginReducer = (state = initialState, action) => {
   
    switch (action.type) {
      case "SUPPLIER_REGISTER":
        alert("Supplier added successfully");
        window.location.replace("/supplier");
        return { ...state, supplier: action.payload,isRegistered:"true" };
      case "SUPPLIER_LOGIN":
        const newsupplierlogin=({...state,login:action.payload,isLoggedIn:"true"});
        return newsupplierlogin;
      case "SUPPLIER_ERR_RES":
        return { ...state, errMsg: action.payload };
      case "SUPPLIER_LOGOUT":
        return { ...state, login: action.payload };
      default:
        return state;
    }
  };
  