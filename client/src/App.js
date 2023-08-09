import './App.css';
import Home from './components/Home.js';
import Header from './components/Header';
//import Footer from './components/Footer';
import About from './components/About';
//import Login from './components/Login';
//import Signup from './components/Signup';
import Product from './components/Product';
import Contact from './components/Contact';
import {BrowserRouter as Router, Routes,} from 'react-router-dom';
import {Route} from 'react-router-dom'
import Pizza from './components/Pizza';
import { Provider } from 'react-redux';
import store from './store';
import CartScrean from './components/CartScrean';
import Registration from './components/Registration';
import Login from './components/Login';
import OrderScreen from './components/OrderScreen';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap'
//import 'bootstrap/js/dist/modal';

//import { bootstrap } from 'react-bootstrap';
function App() {
  return (
    <>
    <Provider store={store}>
    <Header/>
    <Router>
      <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/about" element ={<About/>}/>    
           <Route path="/contact" element ={<Contact/>}/> 
           <Route path="/product" element ={<Product/>}/> 
           <Route path="/contact" element ={<Contact/>}/> 
           <Route path="/pizza" element ={<Pizza/>}/> 
           <Route path="/cartscreen" element ={<CartScrean/>}/> 
           <Route path="/login" element ={<Login/>}/> 
           <Route path="/register" element ={<Registration/>}/> 
           <Route path="/orders" element ={<OrderScreen/>}/> 
           </Routes>
      </Router>
      </Provider>
    </>
  );
}

export default App;
