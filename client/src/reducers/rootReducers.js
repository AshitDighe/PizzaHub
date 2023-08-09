import { combineReducers } from "redux";
import { getAllPizzasReducer } from "./pizzaReducers";
import { CartReducer } from './cartReducers';

const rootReducer = combineReducers({
    getAllPizzasReducer:getAllPizzasReducer,
    CartReducer:CartReducer
})

export default rootReducer