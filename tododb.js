const mongoose = require("mongoose");
const Todo = require("./MODOLS/todo");

require("dotenv").config()
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL,{
    dbName: 'Todo'
})
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log("error to connect" + err)
})