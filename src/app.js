const express = require('express');
const app = express();

       
app.use('/Hello', (req, res) => {           //Request handler
  res.send('Helloooooo!')
})         

app.use('/Bye', (req, res) => {           //Request handler
  res.send('Bubyeeeeee!')
})         
app.use('/', (req, res) => {           //Request handler
  res.send('Hello World!')
}) 

app.listen(3000, ()=> {
    console.log("Sever is sucessfully listening in port:3000");
})