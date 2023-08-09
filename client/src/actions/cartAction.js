export const addToCart=(pizza,quantity,varient)=>(dispatch,getState)=>{

var cartItem={
    name:pizza.name,
    _id:pizza._id,
    image:pizza.image,
    varient:varient,
    quantity:quantity,
    prices:pizza.Prices,
    price:pizza.Prices[0][varient]*quantity
}

dispatch({type:'ADD_TO_CART',payload:cartItem})

const cartItems=getState().CartReducer.cartItems
localStorage.setItem('cartItems',JSON.stringify(cartItems))
}

export const deleteFromCart=(pizza)=>(dispatch,getState)=>{
    dispatch({type:'DELETE_FROM_CART',payload:pizza})
    const cartItems=getState().CartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}