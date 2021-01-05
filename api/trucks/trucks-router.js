const router = require('express').Router();
const Trucks = require('./trucks-model.js');

/// ENDPOINTS

router.get('/', (req, res) => {
    // baseURL/api/trucks/
    Trucks.find()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    Trucks.getById(id)
        .then(data => {
            if(data){
                res.json(data)
            }
            else{
                res.status(404).json({ message: 'could not find trucks with given id' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})



module.exports = router;