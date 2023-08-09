import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderAction';
import Success from '../components/Success';
import Loading from "../components/loading";
import Error from "../components/Error";

const Checkout = ({subtotal}) => {

  const orderstate=useSelector((state)=>state.placeOrderReducer)
  const {loading,error,success}=orderstate
  const dispatch=useDispatch();
    function tokenHander(token)
    {
        console.log(token);
        dispatch(placeOrder(token,subtotal))
    }
  return (
    <div>
      {loading && (<Loading/>)}
      {error && (<Error error='Something went wrong'/>)}
      {success && (<Success success='Your Order Place Successfully '/>)}

        <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        token={tokenHander}
        currency='INR'
        stripeKey='pk_test_51NInJ6SDmFGePZ2Al5ScqGVxKUconUtrqdfxH8evvIFObs8VohhOMh719bctGaG7O2prFH88IQbOojMjgQ1Yx47k008yafNhjC'
        >
            <button className='btn'>Pay Now</button>
        </StripeCheckout>
    </div>
  )
}

export default Checkout