
import  { combineReducers } from "redux";
import { Profiler } from "react";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,

})
export default reducers