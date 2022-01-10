require('dotenv').config();
require('./src/strategies/discord');



const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const Store = require('connect-mongo');

const app = express();// Setup server port
const port = process.env.PORT || 3002;// parse requests of content-type - application/x-www-form-urlencoded
const Authenticated_routes = require('./src/routes');


app.use(express.urlencoded({ extended: true }))// parse requests of content-type - application/json
app.use(express.json())// define a root route


//Database connection

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(session({
  name: 'discord-connect.sid',
  secret: 'giohregioferhgi',
  cookie: {
    maxAge: 60000 * 60 * 24 ,
  },
  resave: false,
  saveUninitialized: false,
  store: Store.create({mongoUrl: process.env.DB_URI})
}))




app.use(passport.initialize());
app.use(passport.session());

//Routing

app.use('/api',Authenticated_routes);


//app.use("/almanax",dofus)
//app.use("/touch/:lang",touch)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});