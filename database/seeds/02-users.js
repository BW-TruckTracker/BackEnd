require("dotenv").config();
const bcryptjs = require('bcryptjs');

// const hash = bcryptjs.hashSync(process.env.USER, parseInt(process.env.BCRYPT_ROUNDS));
const hash = bcryptjs.hashSync("this_is_a_fake_password_for_seeding_purposes_only", 10);

exports.seed = function(knex) {
    return knex('users').insert([
        {username: "fakeUser1",
         password: hash, 
         email: "example@.net",
         current_location_lat: 40.75755460659445,
         current_location_long: -73.9858318571167,
        },

        {username: "fakeUser2",
         password: hash, 
         email: "example@.net",
         current_location_lat: 40.75755460659445,
         current_location_long: -73.9858318571167,
        },

        {username: "fakeUser3",
        password: hash, 
        email: "example@.net",
        current_location_lat: 40.75755460659445,
        current_location_long: -73.9858318571167,
       },

       {username: "fakeUser4",
       password: hash, 
       email: "example@.net",
       current_location_lat: 40.75755460659445,
       current_location_long: -73.9858318571167,
      }
    ]);
  };
  