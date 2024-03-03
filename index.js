require('dotenv').config()
const express = require('express')
const teachers = require('./routes/TeacherRoutes')
const classes = require('./routes/ClassesRoutes')
const mongoose = require('mongoose')
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();

//middleware
app.use(express.json())
app.use('/uploads', express.static('uploads'))
app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 },
  abortOnLimit: true,
}));



app.use(cors());
//routes
app.use('/api/teachers', teachers)
app.use(classes)

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

