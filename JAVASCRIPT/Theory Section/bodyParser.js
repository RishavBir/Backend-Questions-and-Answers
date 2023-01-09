
/*
It is the parsing middleware that parses the incomming request from the user.
*/


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // authenticate the user and send a response
});
