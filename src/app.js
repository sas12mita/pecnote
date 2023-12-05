const express= require("express");
const app= express();
const hbs= require("hbs")
const path= require("path");
const mongoose= require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/pecNotefinal")
.then(()=>console.log("successful"))
.catch(()=> console.log());

const routes=require("./routes");
const templatepath=path.join(__dirname,"../templates/views")
const partialpath=path.join(__dirname,"../templates/partials")

app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.set("view engine","hbs");
app.set("view engine","hbs");
app.set("views",templatepath)
hbs.registerPartials(partialpath);
app.use(express.static("public")); //static/image/
app.use(express.urlencoded());
//app.use("/about",routes),
app.use("/",routes);

app.listen(5556,()=>{
    console.log("Server is listining");
})

