import { ActionType } from "../constants/action-types";

const initialstate= {
    products: [
        {
            id:1,
            title: "Dipesh",
            category: "programmer"
        }
    ]
}
export const productReducer = (state=initialstate,{type,payload}) => {
switch(type){
case ActionType.SET_PRODUCTS:
    return state;
        default: 
      return state
}

  
}
