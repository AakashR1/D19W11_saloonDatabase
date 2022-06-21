const express = require('express');
const router = express.Router();
const userController  =require('../controllers/user.contoller');

router.post('/add-user',userController.addUser)
router.get('/userWithRatingWithBarberOrSaloon',userController.userWithRatingWithBarberOrSaloon)

module.exports = router