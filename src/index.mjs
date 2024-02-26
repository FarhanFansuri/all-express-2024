import express from "express";
import dotenv from "dotenv"
dotenv.config()

const app = express();
const PORT = process.env.PORT ||  3000;

//data
const users = [{
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "age": 25
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "age": 35
  },
  {
    "id": 4,
    "name": "Bob Brown",
    "email": "bob@example.com",
    "age": 40
  }]

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/app',(req,res)=>{
    res.status(201).json({
        name:"farhan"
    })
})

app.get('/api/products/:id',(request,response) =>{
    console.log(request.params)
    response.json([
    {id:1, name:"chicken breast", price:15.00}
    ])
})

app.get('/api/users/:id',(req,res)=>{
    const result = users.find((data)=> data.id === parseInt(req.params.id)) || {status:"404"}
    res.json(result)
})

app.listen(PORT,()=>{
    console.log(`listen to the port ${PORT}!`);
})