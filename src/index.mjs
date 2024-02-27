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

//using parameter
app.get('/api/users/:id',(req,res)=>{
    const result = users.find((data)=> data.id === parseInt(req.params.id)) || {status:"404"}
    res.json(result)
})

//using query
app.get('/user/data', (req,res)=>{
  const {query : {nama,nim}} = req
  console.log(nama  + " " + nim)
  res.send("data is inputed")
})

app.listen(PORT,()=>{
    console.log(`listen to the port ${PORT}!`);
})