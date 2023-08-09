const express=require('express');
//import Pizza from './client/src/components/Pizza';

const Pizza = require('./models/pizzaModel')

const app=express();
const db = require('./db.js');
app.use(express.json());

const pizzaRoute=require('./routes/pizzaRoute')
const UserRoute=require('./routes/userRoute')
const OrderRoute=require('./routes/orderRoute')


app.use('/api/pizzas/',pizzaRoute)
app.use('/api/users/',UserRoute)
app.use('/api/orders/',OrderRoute)

app.get("/",(req,res)=>{
    res.send("server working" + port);
});
// app.get("/getpizzas",(req,res)=>{
//     Pizza.find().then((err, doc) => {
//         console.log("result")
//         if (err) {
//           res.send(err)
//         }
//         res.send(doc)
//       })
    
// });

const port=process.env.PORT ||8000;

app.listen(port,()=>'server running on port');
