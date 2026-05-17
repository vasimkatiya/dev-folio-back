const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./DB/connection');


connectDB();    

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});