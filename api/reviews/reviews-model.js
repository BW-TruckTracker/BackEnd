const db = require('../../database/db-config')


module.exports = {
    get(){
        return db('trucks_reviews')
    },
    getById(truck_id){
        if(!truck_id){
            return Promise.resolve(null)
        }
        else{
            return db('trucks_reviews').where({ truck_id }).first()
        }
    }
}