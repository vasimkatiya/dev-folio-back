const express = require('express');
require('dotenv').config();
const connectDB = require('./DB/connection');
const cookieParser = require('cookie-parser');
const authRouter = require('./Routes/auth.routes');
const homeRouter = require('./Routes/home.routes');
const aboutRouter = require('./Routes/about.routes');
const skillsRouter = require('./Routes/skills.routes');
const projectRouter = require('./Routes/project.routes');
const contactRouter = require('./Routes/contact.routes');
const portRouter = require('./Routes/protfolio.routes');
const cors = require('cors')


const app = express();

app.use(cors({
  origin:"*",
  credentials:true
}));

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
app.use('/api/home',homeRouter);
app.use("/api/about",aboutRouter);
app.use("/api/skills",skillsRouter);
app.use("/api/project",projectRouter);
app.use("/api/contact",contactRouter);
app.use("/api/portfolio",portRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});