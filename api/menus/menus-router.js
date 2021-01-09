const express = require('express')
const router = express.Router()

const Menus = require('./menus-model')
const restricted = require("../auth/restrict-access-middleware.js");

router.get('/:id',  restricted, (req, res) => {
    // baseURL/api/menus/:id
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