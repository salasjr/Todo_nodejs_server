const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
require("dotenv").config()
const port = process.env.PORT || 8000;
require('./tododb')
app.use(cors())
const todoRoutes = require("./ROUTES/todoroute")
app.use(bodyParser.json());

app.use("/todoroutes", todoRoutes)
app.get("/", (req,res)=>{
    res.json({
        message: "api working"
    })
})

app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})