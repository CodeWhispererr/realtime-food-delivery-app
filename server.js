const express=require("express");
const app=express();
const path=require("path");
// Dynamic Port
const PORT=process.env.PORT||3000

//Template Engine
const ejs=require("ejs");

//Express layout
const expressLayout=require('express-ejs-layouts');

// set template engine
app.set("views", path.join(__dirname,"/resources/views"));
app.set("view engine","ejs");

//Assets 
app.use(express.static('public'));
app.get("/",(req,res)=>{
    res.render("home");
    // res.send("This is a Home Page");
    // console.log("Home Route");
});

app.use(expressLayout);


app.listen( PORT,() => {
    console.log(`Expresso ☕ is on Port ${ PORT } Ctrl + C to Stop `) 
});
