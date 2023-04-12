const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    database: "fooddatasystem"
})

app.get('/fooddatasystem',(req,res) =>{
    db.query("SELECT * FROM fooddata",(err,result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.json(result);
        }
    });
});


app.get('/fooddata/:orderID',(req,res) =>{
    const orderID = req.params.orderID;
    db.query("SELECT * FROM fooddata WHERE orderID = ?",orderID,(err,result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});





app.post('/create',(req,res)=>{
    const orderID = req.body.orderID;
    const food = req.body.food;
    const price = req.body.price;
    const calories = req.body.calories;

    db.query("INSERT INTO fooddata (orderID,food,price,calories) VALUES(?,?,?,?)",
    [orderID,food,price,calories],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Values inserted")
        }
    })
})

app.put('/update',(req,res)=>{
    const orderID = req.body.orderID;
    const price = req.body.price;
    db.query("UPDATE fooddata SET price = ? WHERE orderID = ?",[price,orderID],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Values inserted")
        }
    })

})

app.delete('/delete/:orderID',(req,res)=>{
    const orderID = req.params.orderID;
    db.query("DELETE FROM fooddata WHERE orderID = ?",orderID,
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Values inserted")
        }
    })
})


app.listen('3001',()=>{
    console.log('Server is running 3001');
})