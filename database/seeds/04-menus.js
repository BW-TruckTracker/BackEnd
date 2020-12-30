
exports.seed = function(knex) {
    return knex('menus').insert([
        {
            truck_id: 1,
            item_name: "Taco Plate",
            item_description: "5 tacos with your choice of meat.",
            item_img_url: "",
            item_price: 10
        },

        {
            truck_id: 1,
            item_name: "Burrito",
            item_description: "Grilled Burrito with your choice of meat.",
            item_img_url: "",
            item_price: 5
        },

        {
            truck_id: 2,
            item_name: "Lager",
            item_description: "Notes of bread.",
            item_img_url: "",
            item_price: 5
        },

        {
            truck_id: 2,
            item_name: "IPA",
            item_description: "You better like hops!",
            item_img_url: "",
            item_price: 5
        },

        {
            truck_id: 3,
            item_name: "Bahn Mi",
            item_description: "Housemade bread and sauce.",
            item_img_url: "",
            item_price: 6.50
        },

        {
            truck_id: 3,
            item_name: "Curry",
            item_description: "Yep we also have thai curry.",
            item_img_url: "",
            item_price: 12.49
        },

        {
            truck_id: 4,
            item_name: "Bimibap",
            item_description: "Korean rice dish with sauteed vegetables.",
            item_img_url: "",
            item_price: 7
        },

        {
            truck_id: 4,
            item_name: "Bulgogi",
            item_description: "Marinated beef grilled on a grittle.",
            item_img_url: "",
            item_price: 7.50
        },



    ]);
  };
  