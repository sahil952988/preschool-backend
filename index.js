require('dotenv').config()
const express = require('express')
const teachers = require('./routes/TeacherRoutes')
const classes = require('./routes/ClassesRoutes')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express();

//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

app.use(cors());
//routes
app.use('/api/teachers', teachers)
app.use('/api/classes', classes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {

    app.listen(process.env.PORT, () => {
      console.log('Connected and listeining on port 4000')
    })
  })
  .catch((error) => {
    console.log(error)
  })

