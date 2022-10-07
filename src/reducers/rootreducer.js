import { combineReducers } from "redux";
import { farmerLoginReducer } from "./farmerloginreducer";
import { supplierLoginReducer } from "./supplierloginreducer";

const rootReducer = combineReducers({
  farmerlogin: farmerLoginReducer,
  supplierlogin: supplierLoginReducer
});

export default rootReducer;