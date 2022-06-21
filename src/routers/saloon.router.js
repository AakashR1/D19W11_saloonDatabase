const express = require('express');
const router = express.Router();
const saloonController  =require('../controllers/saloon.controller');

router.post('/add-saloon',saloonController.addSaloon)
router.get('/saloonWithBarberOwner',saloonController.saloonWithBarberOwner)

module.exports = router