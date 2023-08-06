const express = require("express")

const router = express.Router()
const Todo = require("../MODOLS/todo")
router.post("/createtodo", async (req,res)=>{
    try{
        const {title, discription} = req.body
        const newTodo = new Todo({
            title,
            discription,
        })
        await newTodo.save()
        res.status(200).json({
            message: "created successfully"
        })
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
})
router.get('/getalltodo', async (req,res)=>{
    try{
        const alltodo = await Todo.find();
        res.status(200).json({
            alltodo,
            message: "sucess"
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
})
router.get('/gettodo/:id', async (req,res)=>{
    try{
        const todo = await Todo.findById(req.params.id);
        if(!todo){
            res.status(404).json({
                message:"todo not found"
            })
        }
        res.status(200).json({
            todo,
            message: "sucess"
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
})
router.put('/update/:id', async (req,res)=>{
    try{
        const {title,completed, discription} = req.body

        const todo = await Todo.findByIdAndUpdate(req.params.id,{
            title,
            discription,
            completed
        },{ new:true});
        if(!todo){
            res.status(404).json({
                message:"todo not found"
            })
        }
        res.status(200).json({
            todo,
            message: "sucess"
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
})
router.delete('/delete/:id', async(req,res)=>{
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id)
        if(!todo){
            res.status(404).json({
                message:"not found"
            })
        }
        res.status(200).json({
            message: "deleted successfully"
        })
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
})
module.exports = router;
