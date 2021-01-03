const db = require('../../database/db-config.js');

module.exports = {
    find,
  };
  
  function find() {
    return db('trucks');
  }
  
//   function findBy(filter) {
//     return db('users').where(filter);
//   }
//   async function add(user) {
//     const [id] = await db('users').insert(user, 'user_id');
//     return findById(id);
//   }
//   function findById(id) {
//     return db('users').where({ user_id: id }).first();
//   }