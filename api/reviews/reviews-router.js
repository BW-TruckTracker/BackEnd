const express = require('express');
const router = express.Router();
const Reviews = require('./reviews-model');

/// ENDPOINTS
router.get('/:id', (req, res) => {
    //baseurl/api/reviews/:id
    const { id } = req.params
    Reviews.getById(id)
        .then(data => {
            if(data){
                res.json(data)
            }
            else{
                res.status(404).json({ message: 'could not find reviews with given truck id '})
            }
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
});

router.post('/', async (req, res) => {
    //baseurl/api/reviews/
    const review = req.body
    try{
        const newReview = await Reviews.add(review)
        res.status(201).json(newReview[0])  //index 0 because collection will always have len 1
    }
    catch (e) {
        res.status(500).json({ message: e.message})
    }
});

module.exports = router