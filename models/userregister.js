const  mongoose  = require("mongoose")

const validator= require("validator");
const registerschema= mongoose.Schema({
    name:{
        type:String,
        require:true,
        minLenght:3
    },
    email:{
        type:String,
        require:true,
        validator(value){
           if(!validator.isEmail('value')){
            throw new Error("invalid email id")
           } //=> true
        }
    },
    username:{
        type:String,
        require:true,
        minLenght:3,
        unique:true,

    },
    password:{
        type:String,
        require:true,
        minLenght:5,
    },
    cpassword:{
        type:String,
        require:true,
        minLenght:5,
    },
    
})
const Userregistration=mongoose.model("Userregistration",registerschema);
module.exports=Userregistration;