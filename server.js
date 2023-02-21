const express=require("express");
const app=express();
const path=require("path");
// Dynamic Port
const PORT=process.env.PORT||3000

//Template Engine
const ejs=require("ejs");

//Express layout
const expressLayout=require('express-ejs-layouts');



//Assets 
app.use(express.static('public'));


// set template engine
app.use(expressLayout);
app.set("views", path.join(__dirname,"/resources/views"));
app.set("view engine","ejs");



app.get("/",(req,res)=>{
    res.render("home");
    // res.send("This is a Home Page");
});

app.get("/cart",(req,res)=>{
    res.render("customers/cart");
});
app.get("/login",(req,res)=>{
    res.render("auth/login");
});
app.get("/register",(req,res)=>{
    res.render("auth/register");
});

app.listen( PORT,() => {
    console.log(`Expresso ☕ is on Port ${ PORT } Ctrl + C to Stop `) 
});
