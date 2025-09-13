const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello express!");
});
app.get("/about", (req, res)=>{
    res.send("This is About route");
});
app.get("/contact", (req, res)=>{
    res.send("This is contact route @ example.com");
});

const Port = process.env.PORT || 3000;

app.listen(Port, ()=>{
    console.log("Server is running on port", Port);
    
})