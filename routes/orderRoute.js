// const express=require("express")
// const router=express.Router();
// const { v4: uuidv4 } = require('uuid');
// const stripe=require('stripe')('sk_test_51NInJ6SDmFGePZ2Atq7d4kfaTVvMUmfqlmLQ2V0umzeLTPvUDGOgVmuuR4fnixGPd7WZkiAqT1SuVcWSFXT6Xo0Q003PuJx0WI')

// router.post("/placeorder",async(req,res)=>{
    
//     const{token,subtotal,currenUser,cartItems}=req.body
    
//     try{
//     const customer=await stripe.customers.create({
//         email:token.email,
//         source:token.id
//     })
//     const payment=await stripe.charges.create({
//         amount:subtotal*100,
//         currency:'inr',
//         customer:customer.id,
//         receipt_email:token.email
//     },{
//         idempotencykey:uuidv4()
//     })
//     if(payment)
//     {
//         res.send('payment Done')
//     }else{
//         res.send('Payment failed')
//     }
    
//     }catch(error){
//         return res.status(400).json({message:'SOmething went wrong',error});
//     }
// });
// module.exports=router

const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51NInJ6SDmFGePZ2Atq7d4kfaTVvMUmfqlmLQ2V0umzeLTPvUDGOgVmuuR4fnixGPd7WZkiAqT1SuVcWSFXT6Xo0Q003PuJx0WI");
const Order=require('../models/orderModel')

router.post("/placeorder", async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    })

    const payment = await stripe.paymentIntents.create({         //You cannot accept payments using this API as it is no longer (we replace word(Api) charest to paymentIntents)
      amount: subtotal * 100,
      currency: 'inr',
      customer: customer.id,
      receipt_email: token.email
    }, {
      idempotencyKey: uuidv4()
    });

    if (payment) {

      const neworder=new Order({
        name:currentUser.name,
        email:currentUser.email,
        userid:currentUser._id,
        orderItem:cartItems,
        orderAmount:subtotal,
        shippingAddress:{
          street:token.card.address_line1,
          city:token.card.address_city,
          country:token.card.address_country,
          pincode:token.card.address_zip
        },
        transactionId:payment.id
        
      })
      neworder.save()

      res.send('Order placed Successfully');
    } else {
      res.send('Payment failed');
    }
  } catch (error) {
    return res.status(400).json({ message: 'Something went wrong' + error });
  }
});

router.post("/getuserorders", async (req, res) => {
  const { userid } = req.body;

  try {
    const orders = await Order.find({ userid: userid }).sort({_id:-1});
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});


module.exports = router;
