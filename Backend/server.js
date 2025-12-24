const experess = require('express');
const connectDB = require("./config/db")
const todo = require('./models/todo')
const cors = require("cors");
const app= experess();
const dotenv = require("dotenv")
dotenv.config();
connectDB();
app.use(experess.json())
app.get('/',async(req,res) => {
    try{
        const data=await todo.find();
        res.status(201).json(data)
    }catch(err){
        res.send(err);
    }
    res.send("Get route is working by vidhya");
})
app.post("/create",async(req,res)=>{
    try{
        const newTodo =new todo(req.boby);
        const data = await newTodo.save();
        res.status(201).json(data);
    }catch(err){
    }
    res.send("Post route is working by vidhya");
})  
app.put("/update/:id", async(req,res)=>{
    try{
         const updateTask = await todo.findByIdAndUpdate(req.params.id,req.body, {new:true})
         res.status(201).json(updateTask)
    }catch(err){

    }  
    res.send("put route is working by vidhya");
})
app.delete("/delete/:id",async(req,res)=>{
    try{
    await todo.findByIdAndDelete(req.params.id)
    res.status(200).json({
        message:"Task Deleted Successfully"
    })
    }catch(err){
        res.send(err)
    }
})
const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log(`Server is working on http://localhost:${PORT}🦩`);
})