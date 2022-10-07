const initialState = {
    supplier: {},
    login: {},
    errMsg: "",
  };
  
  export const supplierLoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SUPPLIER_REGISTER":
        return { ...state, supplier: action.payload };
      case "SUPPLIER_LOGIN":
        console.log({ ...state, login: action.payload });
        return { ...state, login: action.payload };
      case "SUPPLIER_ERR_RES":
        return { ...state, errMsg: action.payload };
      case "SUPPLIER_LOGOUT":
        return { ...state, login: action.payload };
      default:
        return state;
    }
  };
  