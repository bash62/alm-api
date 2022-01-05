const express = require('express');
const dofus = require("./src/routes/dofus.js");
const views = require("./src/routes/views.js")
const path = require('path');


const app = express();// Setup server port

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/styles'))

app.set('views', './src/views');
app.set('view engine', 'ejs');

const port = process.env.PORT || 5000;// parse requests of content-type - application/x-www-form-urlencoded



app.use(express.urlencoded({ extended: true }))// parse requests of content-type - application/json
app.use(express.json())// define a root route




//Routing


app.use("/almanax",dofus)

app.get('/',(req,res)=>{
  res.render('index')
});

//app.use("/touch/:lang",touch)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});