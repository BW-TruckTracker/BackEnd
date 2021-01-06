const db = require('../../database/db-config')

module.exports = {
    get(){
        return db('user_favorites as uf')
        .join('users as u', 'u.user_id', '=', 'uf.user_id')
        .join('trucks as t', 't.truck_id', '=','uf.truck_id')
        .select('uf.user_id', 'u.username', 'uf.truck_id', 't.truck_name')
    },
    getById(id){
        if(!id){
            return Promise.resolve(null)
        }
        else{
            return db('user_favorites')
            .join('users as u', 'u.user_id', '=', 'uf.user_id')
            .join('trucks as t', 't.truck_id', '=','uf.truck_id')
            .select('uf.user_id', 'u.username', 'uf.truck_id', 't.truck_name')
            .where('user_id', id)
        }
    },
    add(favorites){
        return db('user_favorites').insert(favorites)
            .then(([id]) => {
                return db('user_favorites').where('user_id', id)
            })
    }
}