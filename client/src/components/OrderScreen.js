import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../actions/orderAction';
import Loading from "../components/loading";
import Error from "../components/Error";
import {getUserOrderReducer } from './../actions/orderAction';

const OrderScreen = () => {
  const dispatch = useDispatch();
  const orderstate=useSelector((state)=>state.getUserOrderReducer)
  const { orders, error, loading } = orderstate;

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{ fontSize: '35px' }}>My Orders</h2>
      <hr />
      <div className='row justify-content-center'>
        {loading && <Loading />}
        {error && <Error error='Something went wrong' />}
        {orders && orders.map((order) => (
          <div key={order._id} className='col-md-8 m-2 p-1' style={{ backgroundColor: 'red', color: 'white' }}>
            <div className='flex-container'>
              <div className='text-left w-100 m-1'>
                <h2 style={{ fontSize: '25px' }}>Items</h2>
                <hr />
                {order.orderItems.map((item) => (
                  <div key={item._id}>
                    <p>{item.name} [{item.variant}]+{item.quantity}={item.price}</p>
                  </div>
                ))}
              </div>
              <div className='text-left w-100 m-1'>
                <h2 style={{ fontSize: '25px' }}>Address</h2>
                <hr />
                <p>Street: {order.shippingAddress.street}</p>
                <p>City: {order.shippingAddress.city}</p>
                <p>Country: {order.shippingAddress.country}</p>
                <p>PinCode: {order.shippingAddress.pincode}</p>
              </div>
              <div className='text-left w-100 m-1'>
                <h2 style={{ fontSize: '25px' }}>Order Info</h2>
                <hr />
                <p>Order Amount: {order.orderAmount}</p>
                <p>Date: {order.createdAt.substring(0, 10)}</p>
                <p>Transaction Id: {order.transactionId}</p>
                <p>Order Id: {order._id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderScreen;