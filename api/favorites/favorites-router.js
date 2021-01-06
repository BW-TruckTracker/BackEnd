const express = require('express')
const router = express.Router()
const Favorites = require('./favorites-model')


router.get('/', (req, res) => {
    Favorites.get()
        .then(favorites => {
            res.status(200).json(favorites)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: err.message })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    Favorites.getById(id)
        .then(data => {
            if(data){
                res.json(data)
            }
            else{
                res.status(404).json({ message: `No favorite truck could be found with given user id`})
            }
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

router.post('/', (req, res) => {
    const favorites = req.body
    Favorites.add(favorites)
        .then(data => {
            res.status(201).json(favorites)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})


module.exports = router