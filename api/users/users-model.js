const db = require('../../database/db-config.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  isValid,
};

function find() {
  return db('users');
}

function findBy(filter) {
  return db('users').where(filter);
}
async function add(user) {
  const [id] = await db('users').insert(user, 'user_id');
  return findById(id);
}
function findById(id) {
  return db('users').where({ user_id: id }).first();
}

/// this is more of a helper function than a model. didnt want to store it in it's own file.
function isValid(user) {
    return Boolean(user.username && user.password && typeof user.password === "string");
  }