const db = require('../../database/db-config')


module.exports = {
    get(){
        return db('trucks_reviews')
    },
    getById(id){
        if(!id){
            return Promise.resolve(null)
        }
        else{
            return db('trucks_reviews')
            .where('truck_id', id)
        }
    },
    add(reviews){
        return db('trucks_reviews').insert(reviews)
            .then(([id]) => {
                return db('trucks_reviews').where('truck_id', id)
            })
    }
}