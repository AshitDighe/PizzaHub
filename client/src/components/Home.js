import { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
//import PIZZA from '../Data'
import Pizza from '../components/Pizza'
import { getAllPizzas } from '../actions/pizzaAction'
import Loading from '../components/loading';
import Error from '../components/Error';

    const Home = () => {
        const dispatch=useDispatch()

        const pizzasstate=useSelector(state=>state.getAllPizzasReducer)
        
        const {pizzas,error,loading}=pizzasstate
        useEffect((e)=>{
           dispatch(getAllPizzas())
           //e.preventDefault();
        },[])
            return (
                    <div>
                        <div className="container py-5">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <h1>Product</h1>
                                    <hr />
                                </div>
                            </div>
                        </div>
                <div className="container">
            <div className="row justify-content-around">
                {loading ? (<Loading/>):error ?(<Error error='Something went wrong'/>):(
                   pizzas.map(pizza=>{
                    return <div className="col-md-3 m-3" key={pizza._id}>
                        <div>
                            <Pizza pizza={pizza}/>
                        </div>
                    </div>
                        })
                )}
                </div>
                </div>
                </div>
                

                )
    }

            
            export default Home
