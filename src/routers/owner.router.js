const express = require('express');
const router = express.Router();
const ownerController  =require('../controllers/owner.controller');

router.post('/add-owner',ownerController.addOwner);
router.get('/saloonWithRatingWithuser',ownerController.saloonWithRatingWithuser);

module.exports = router