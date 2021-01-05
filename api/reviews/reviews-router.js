const express = require('express')
const router = express.Router()
const Reviews = require('./reviews-model')


router.get('/', (req, res) => {
    Reviews.get()
        .then(reviews => {
            res.status(200).json(reviews)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: err.message })
        })
})

router.get('/:id', (req, res) => {
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
})

router.post('/', (req, res) => {
    const review = req.body
    Reviews.add(review)
        .then(r => {
            res.status(201).json(review)
        })
        .catch(err => {
            res.status(500).json({ mesasge: err.message })
        })
})

module.exports = router