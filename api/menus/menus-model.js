const db = require('../../database/db-config')
const { getById } = require('../reviews/reviews-model')


module.exports = {
    get(){
        return db('menus')
    },

    getById(id){
        if(!id){
            return Promise.resolve(null)
        }
        else{
            return db('menus').where('truck_id', id)
        }
    }
}
