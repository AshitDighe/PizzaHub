import {combineReducers, createStore} from 'redux'
 import {applyMiddleware} from 'redux'
 import logger from 'redux-logger'
 import reduxThunk from 'redux-thunk'
 import thunk from 'redux-thunk'
 import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllPizzasReducer } from './reducers/pizzaReducers';
//import rootReducer from './reducers/rootReducers';
import { CartReducer } from './reducers/cartReducers';
import { loginUserReducer, registerUserReducer } from './reducers/userReducer';
import { placeOrderReducer,getUserOrderReducer } from './reducers/orderReducers';

const middlewares = [reduxThunk,logger]

 const finalReducer=combineReducers({
    getAllPizzasReducer:getAllPizzasReducer,
    CartReducer:CartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrderReducer:getUserOrderReducer
 })
 
const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]

const currentUser=localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')):null

const initialState={
    CartReducer:{
        cartItems:cartItems 
    },
    loginUserReducer:{
        currentUser:currentUser
    }
}
 const composeEnhancers=composeWithDevTools({})
 //const store = createStore(finalReducer,initialState,applyMiddleware(...middlewares))
 const store = createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

 export default store 