const express = require('express');
const router = express.Router();
const yelp = require('../services/yelp');

/* GET home page. */
router.get('/', function(req, res, next) {

    const location = 'Redwood City';
    yelp.getBusinesses({
        location,
        categories: 'icecream',
        limit: 10,
        sort_by: 'rating',
    })
    .then(businesses => {
        res.render('index', { businesses, location });
    })
    .catch(error => {
        console.log(error);
        res.render('error', { message: 'Something Went Wrong!', error })
    });
});


module.exports = router;
