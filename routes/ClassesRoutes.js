const express = require('express')

const { getClasses, getClass, createClass, deleteClass, updateClass } = require('../models/controller/ClassController')

const { fileCheck } = require('../routes/middleware/file_check')


const router = express.Router();

//GET ALL Class
router.get('/', getClasses)

//GET A SINGLE Class
router.get('/:id', getClass)

//POST A NEW Class
router.post('/', fileCheck, createClass)

//DELETE A NEW Class
router.delete('/:id', deleteClass)


//UPDATE A NEW Class
router.patch('/:id', updateClass)



module.exports = router