const express = require('express');
require('dotenv').config();
const connectDB = require('./DB/connection');
const cookieParser = require('cookie-parser');
const authRouter = require('./Routes/auth.routes');



const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


//db connection function
connectDB();    

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth',authRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});