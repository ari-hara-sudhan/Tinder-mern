import express from 'express';
import mongoose from "mongoose"
import cors from 'cors'
import Pusher from 'pusher'
import Cards from "./dbCards.js"


const app=express()
const port =process.env.PORT || 8080

app.use(cors())
app.use(express.json())

const connection_url='mongodb+srv://admin:yyKhC5z8kPpPFoSk@cluster0.ahoiy.mongodb.net/datingDb?retryWrites=true&w=majority'

mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
})



app.get("/",(req,res)=>res.status(200).send("hello world"))

app.post('/tinder',(req,res)=>{
    const dbModel=req.body;

    Cards.create(dbModel,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })


})

app.get("/tinder/cards",(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

app.listen(port,()=>console.log(`port is running on ${port}`))