import { combineReducers } from "redux";
import { adminLoginReducer } from "./adminloginreducer";
import { farmerLoginReducer } from "./farmerloginreducer";
import { supplierLoginReducer } from "./supplierloginreducer";

const rootReducer = combineReducers({
  farmerlogin: farmerLoginReducer,
  supplierlogin: supplierLoginReducer,
  adminlogin:adminLoginReducer
});

export default rootReducer;