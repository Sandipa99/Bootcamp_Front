const initialState = {
    admin: {},
    login: {},
    errMsg: ""
  };
  
  export const adminLoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADMIN_LOGIN":
        const newlogin=({...state,login:action.payload,isLoggedIn:"true"});
        return newlogin;
      case "ADMIN_ERR_RES":
        return { ...state, errMsg: action.payload };
      default:
        return state;
    }
  };
  