const express = require('express');
const router = express.Router();
const barberRatingController  =require('../controllers/barber.rating.controller');

router.post('/give-rating-to-barber',barberRatingController.ratingToBarber);
router.get('/ratingGivenByUsers',barberRatingController.ratingGivenByUsers);


module.exports = router

// [
//     {
//         "barberId": 1,
//         "ratting": 5,
//         "userId": 1,
//         "Barber_details": {
//             "id": 1,
//             "saloonId": 1,
//             "firstName": "raju",
//             "lastName": "raj",
//             "ratting": null
//         },
//         "user_details": {
//             "id": 1,
//             "email": "pritesh@gmail.com",
//             "firstName": "pritesh",
//             "lastName": "gondecha",
//             "password": "123456",
//             "mobileNumber": "9999999999",
//             "role": "owner"
//         }
//     },
//     {
//         "barberId": 1,
//         "ratting": 5,
//         "userId": 2,
//         "Barber_details": {
//             "id": 1,
//             "saloonId": 1,
//             "firstName": "raju",
//             "lastName": "raj",
//             "ratting": null
//         },
//         "user_details": {
//             "id": 2,
//             "email": "abhijeet@gmail.com",
//             "firstName": "abhijeet",
//             "lastName": "khengada",
//             "password": "123456",
//             "mobileNumber": "9999999999",
//             "role": "owner"
//         }
//     }
// ]