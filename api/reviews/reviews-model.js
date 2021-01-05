const db = require('../../database/db-config')


module.exports = {
    get,
    getById,
    add,
}

function get(){
    return db('trucks_reviews')
}

function getById(id){
    if(!id){
        return Promise.resolve(null)
    }
    else{
        return db('trucks_reviews')
        .where('truck_id', id)
    }
}

async function add(review){
    const [id] = await db('trucks_reviews').insert(review);
    return db('trucks_reviews').where('review_id', id)
}