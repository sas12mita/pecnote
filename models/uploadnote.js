const  mongoose  = require("mongoose")

const validator= require("validator");
const uploadnoteschema= mongoose.Schema({
    subname:{
        type:String,
        require:true,
        minLenght:3
    },
    faculty:{
        type:String,
        require:true,
        minLenght:4
    },
    semester:{
        type:String,
        require:true,

    },
    link:{
        type:String,
        require:true,
    }
    
})
const UploadNote=mongoose.model("UploadNote",uploadnoteschema);
module.exports=UploadNote;