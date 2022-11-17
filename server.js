//jshint esversion:6
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send("<h1>hello world</h1>")
});

app.get('/contact', (req, res) =>{
    res.send("akashrp512@gmail.com")
});

app.listen(port, ()=>{
    console.log('example app listening  on port ${port}')
});