const db = require('../../database/db-config')

module.exports = {
    getById(id){
        if(!id){
            return Promise.resolve(null)
        }
        else{
            return db('user_favorites as uf')
            .join('users as u', 'u.user_id', '=', 'uf.user_id')
            .join('trucks as t', 't.truck_id', '=','uf.truck_id')
            .select('uf.id as fav_id', 'uf.user_id', 'uf.truck_id', 't.truck_name', 't.cusine_type')
            .where('uf.user_id', id)
        }
    },

    add(obj){
        return db('user_favorites').insert({user_id: obj.user_id, truck_id: obj.truck_id})
    },

    delete(id){
        return db('user_favorites')
        .del().where({ id })
    }
}