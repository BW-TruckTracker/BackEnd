require("dotenv").config();
const bcryptjs = require('bcryptjs');

const hash = bcryptjs.hashSync(process.env.USER, parseInt(process.env.BCRYPT_ROUNDS));

exports.seed = function(knex) {
    return knex('users').insert([
        {username: "fakeUser1",
         password: hash, 
         email: "example@.net",
        },

        {username: "fakeUser2",
         password: hash, 
         email: "example@.net",
        },

        {username: "fakeUser3",
        password: hash, 
        email: "example@.net",
       },

       {username: "fakeUser4",
       password: hash, 
       email: "example@.net",
      }
    ]);
  };
  