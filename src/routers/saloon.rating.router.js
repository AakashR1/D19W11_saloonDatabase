const express = require('express');
const router = express.Router();
const saloonRatingController  =require('../controllers/saloon.rating.contoller');

router.post('/rate-saloon',saloonRatingController.rateSaloon);
router.get('/saloonRatingWithUser',saloonRatingController.saloonRatingWithUser);

module.exports = router