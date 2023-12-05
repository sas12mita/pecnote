const express=require('express');
//const {route}=require('express/lib/application');

const User=require("../models/usercontact");
const Userregistration=require("../models/userregister");
const UploadNote=require("../models/uploadnote")
const routes=express.Router();
routes.get("/",(req,res)=>
{
res.render("index");
})
routes.post("/contact",async(req,res)=>
    {
try {

    const Userdata= new User(req.body);
    Userdata.save();
    res.render("index");
} catch (error) {
    res.status(500).send(error);
}
}) 
routes.get("/signup",(req,res)=>
{
res.render("signup");
})

routes.post("/register",async(req,res)=>
    {
try {
    const password= req.body.password;
    const cpassword=req.body.cpassword;
    if(cpassword===password)
    {
        const uploadnotedata= new UploadNote(req.body);
        uploadnotedata.save();
        res.render("uploadnote");
    }
    else{
        res.send("password are not matching");
    }   
} catch (error) {
    res.status(500).send(error);
}
})



routes.post("/uploadnote",async(req,res)=>
    {
try {

        const Registerdata= new Userregistration(req.body);
        Registerdata.save();
        res.render("index");
    }
catch (error) {
    res.status(500).send(error);
}
})

routes.get("/login",(req,res)=>
{
res.render("login");
})

routes.post("/userlogin",async(req,res)=>
    {
try {
    const password= req.body.password;
    const username=req.body.username;
    const name= await Userregistration.findOne({username:username});
    if(name.password===password)
    {
        
        res.render("dashboard");
    }
    else{
        res.send("Invalid Login details");
    } 
} catch (error) {
    res.status(500).send(error);
}
})
routes.get("/uploadnote",(req,res)=>
{
res.render("uploadnote");
})


module.exports=routes;
