const express = require('express');
const router = express.Router();
const barberController  =require('../controllers/barber.controller');

router.post('/add-barber',barberController.addBarber);
router.get('/barberWithSaloonAndRating',barberController.barberWithSaloonAndRating);

module.exports = router