const initialState = {
    farmer: {},
    login: {},
    errMsg: ""
  };
  
  export const farmerLoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FARMER_REGISTER":
        return { ...state, farmer: action.payload };
      case "FARMER_LOGIN":
        const newlogin=({...state,login:action.payload,isLoggedIn:"true"});
        return newlogin;
      case "FARMER_ERR_RES":
        return { ...state, errMsg: action.payload };
      case "FARMER_LOGOUT":
        return { ...state, login: action.payload };
      default:
        return state;
    }
  };
  