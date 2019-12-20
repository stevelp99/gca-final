const router =require('express').Router();
const authenticate= require("../middleware/authenticate");



router.get('/dash',authenticate,(req,res)=>{
    let obj={
        message:"this is the user dash route",
        secret:"pass",
        _id:req.body_id
    };
    res.status(200).send(obj);
});



module.exports=router;