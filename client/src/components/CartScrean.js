import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { CartReducer } from './../reducers/cartReducers';
import { addToCart, deleteFromCart } from '../actions/cartAction';
import Checkout from '../components/Checkout';

const CartScrean = () => {

    const cartstate=useSelector(state=>state.CartReducer)
    const cartItems=cartstate.cartItems

    var subtotal=cartItems.reduce((x , item)=>x+item.price,0)

   const dispatch=useDispatch()

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
         <h2 style={{fontSize:"35px"}}>My Cart</h2>
         {cartItems.map(item=>{
            return<div className="flex-container">
            <div className='text-left m-1 w-100'>
                 <h1>{item.name}[{item.varient}]</h1>
                 <h1>Price: {item.quantity}*{item.prices[0][item.varient]}={item.price}</h1>
                 <h1 style={{display:'inline'}}>Quantity:</h1>
                 <i className="fa fa-plus" aria-hidden="true"></i>
                 <b>{item.quantity}</b>
                 <i className="fa fa-minus" aria-hidden="true"></i>
                 <hr/>
            </div>
            <div className='m-1 w-100'>
                <img src={item.image} style={{height:'80px',height:'80px'}}/>

            </div>
            <div className='m-1 w-100 mt-5'>
            <i className="fa fa-trash" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
            </div>
         </div>
       
         })}
         </div>
        <div className="col-md-4">
         <h2 style={{fontSize:'30px'}}>SubTotal: {subtotal}/-</h2>
         {/* <button className='btn' id="button1">CHECK OUT</button> */}
         <Checkout subtotal={subtotal}/>
        </div>
      </div>
    </div>
  )
}

export default CartScrean