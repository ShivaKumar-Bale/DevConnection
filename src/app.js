const express = require('express');
const app = express();         

app.get("/user", (req,res) => {
  res.send({"firstName": "Shiva Kumar", "lastName": "Bale"})
})

app.post("/user", (req,res) => {
  res.send("Data sucessfully saved to database")
})

app.delete("/user" , (req,res) => {
  res.send("Data Deleted successfully")
})

app.use('/test', (req, res) => {           //Request handler
  res.send('Testingggg!')
})

app.listen(3000, ()=> {
    console.log("Sever is sucessfully listening in port:3000");
})