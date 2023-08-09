import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../actions/cartAction';
const Pizza = ({pizza}) => {
const [show, setShow] = useState(false);
const[quantity,setquantity]=useState(1)
const[varient,setvarient]=useState('small')

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const dispatch=useDispatch();

  function addtocart()
  {
   dispatch(addToCart(pizza,quantity,varient));
  }
return (
<div className="card my-5 py-4 shadow-lg p-2 mb-2 bg-white rounded"style={{width: "18rem"}}>
        <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
            <img src={pizza.image} className="img-fluid ms-4" alt={pizza.name} style={{height:'200px',width:'200px'}} />
                 </div>
                    <div className="flex-container">
                    <div className='w-100 m-1'>
                    <p>variant</p>
                    <select className="form-control" value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                        {pizza.varients.map(varient=>{
                        return<option value={varient}>{varient}</option>
                    })
                }
                    </select>
                    </div>
                    <div className='w-100 m-1'>
                        <p>Quntity</p>
                        <select className="form-control" value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                        {[...Array(10).keys()].map((x,i)=>{
                            return<option value={i+1}>{i+1}</option>
                        })}
                        </select>
                    </div>
                    </div>
                    <div className="flex-container">
                    <div className='ms-1 w-100'>
                    <h1>Price : {pizza.Prices[0][varient]*quantity} Rs/-</h1>
                    </div>
                    <div className='ms-1 w-100'>
                        <button className='btn' onClick={addtocart}>ADD TO CART</button>
                    </div>
                    </div>
                <Modal show={show}>
                    <Modal.Header closeButton onClick={handleClose}>
                         <Modal.Title>{pizza.name}</Modal.Title>
                    </Modal.Header>
                 <Modal.Body>
                 <img src={pizza.image} className="img-fluid ms-4" alt={pizza.name} style={{height:'300px',width:'300px'}} />
                 <p>{pizza.description}</p>
                    </Modal.Body>
              <Modal.Footer>
                       <button onClick={handleClose}>Close</button>
              </Modal.Footer>
             </Modal>

                </div>
)
}

export default Pizza