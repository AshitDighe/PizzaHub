const express=require("express")
const router=express.Router();
const User=require('../models/userModel')

router.post("/register",async(req,res)=>{
    const {name , email , password}=req.body
    const newUser = new User({name , email , password})
    try{
        newUser.save()
        res.send("User Registerd Successfully")
    }catch(error){
        return res.status(400).json({message:error});
    }
});

// router.post("/login",async(req,res)=>{
//     const {email,password}=req.body
//     try{
//     const newUser = new User.find({email,password})
    
//     if(newUser.length>0)
//     {
//         res.send("User logged in Successfully")
//     }
//     else{
//         return res.status(400).json({message:'User Login Failed'});
//     }
//     }catch(error){
//         return res.status(400).json({message:'Something went wrong'});
//     }
// });
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email, password });
  
      if (user) {
        const currentUser = {
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          _id: user._id
        };
        res.send(currentUser);
        console.log(currentUser); 
      } else {
        return res.status(400).json({ message: "User Login Failed" });
      }
    } catch (error) {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });

module.exports=router;