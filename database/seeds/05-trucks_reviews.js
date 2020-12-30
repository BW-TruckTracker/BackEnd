

exports.seed = function(knex) {
    return knex('trucks_reviews').insert([
      {
        truck_id: 1,
        user_id: 1,
        food_quality_star_count: 5,
        service_star_count: 4,
        cleanliness_star_count: 5,
        comment: "I'll be back!!"

    },

    {
        truck_id: 2,
        user_id: 1,
        food_quality_star_count: 5,
        service_star_count: 4,
        cleanliness_star_count: 1,
        comment: "It's beer all right."

    },

    {
        truck_id: 3,
        user_id: 1,
        food_quality_star_count: 1,
        service_star_count: 5,
        cleanliness_star_count: 1,
        comment: "Wasnt good :("

    },

    {
        truck_id: 3,
        user_id: 2,
        food_quality_star_count: 3,
        service_star_count: 3,
        cleanliness_star_count: 3,
        comment: "Pretty average!"

    },

    {
        truck_id: 4,
        user_id: 2,
        food_quality_star_count: 4,
        service_star_count: 4,
        cleanliness_star_count: 4,
        comment: "Try the Bibimbap it's grand"

    },
    ]);
  };
  