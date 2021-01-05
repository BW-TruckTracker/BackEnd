const express = require('express')
const router = express.Router()
const Menus = require('./menus-model')

router.get('/', (req, res) => {
    Menus.get()
        .then(menus => {
            res.status(200).json(menus)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: err.message })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    Menus.getById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            }
            else{
                res.status(404).json({ message: 'could not find menu with given truck id' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

module.exports = router