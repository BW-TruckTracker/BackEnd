const router = require('express').Router();
const Trucks = require('./trucks-model.js');

const Reviews = require('../reviews/reviews-model.js'); //neccessary for including star count on truck objects
const restricted = require("../auth/restrict-access-middleware.js");

/// ENDPOINTS
router.get('/', (req, res) => {
    // baseURL/api/trucks/
    // need this to return all trucks to be plotted on map
    Trucks.find()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

router.get('/:id', restricted, async (req, res) => {
    // baseURL/api/trucks/:id

    const { id } = req.params;

    try{
        let truckObj = await Trucks.getById(id);
        let starCounts = await Reviews.getById(id);
        let avgStars = await calcAvgStars(starCounts);

        res.status(200).json({ ...truckObj[0], ...avgStars }) 

    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
})


/// HELPER FUNCTION
async function calcAvgStars(obj) {

    //first, collect all scores into one array
    const results = [];
    obj.forEach(element => {
        results.push(element['food_quality_star_count'], element['service_star_count'], element['cleanliness_star_count'])
    })

    //second, count length of array
    const count = results.length

    //lastly, sum all values in results array and divide by count
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const average_stars = Math.round(results.reduce(reducer) / count);  //Math.round: 2.49 will be rounded down (2), and 2.5 will be rounded up (3).
    
    return { average_stars }
}

module.exports = router;