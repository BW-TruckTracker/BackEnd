const db = require('../../database/db-config.js');

module.exports = {
    find,
    getById,
  };
  
  function find() {
    return db('trucks').select('truck_id', 'current_location_lat', 'current_location_long');
  }

  function getById(truck_id){
    if(!truck_id){
      return Promise.resolve(null)
    }
    else{
      return db('trucks').where({ truck_id: truck_id })
    }
  }
