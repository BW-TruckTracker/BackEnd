
exports.up = function(knex) {
    return knex.schema

    .createTable('users', tbl => {
          tbl.increments('user_id').primary()
          tbl.text('username', 128).notNullable().unique()
          tbl.text('password', 256).notNullable()
          tbl.text('email', 128).notNullable()
          tbl.decimal('current_location_lat', 128)
          tbl.decimal('current_location_long', 128)
          tbl.timestamps(true, true)    // Adds created_at and updated_at columns on the database, setting each to datetime types. table.timestamps([useTimestamps], [defaultToNow])
    })
        
    .createTable('trucks', tbl => {
        tbl.increments('truck_id').primary()
        tbl.text('truck_name').notNullable().unique()
        tbl.text('truck_img_url', 128)
        tbl.text('cusine_type', 128).notNullable()
        tbl.decimal('current_location_lat', 128).notNullable()
        tbl.decimal('current_location_long', 128).notNullable()
    })

    .createTable('menus', tbl => {
        tbl.increments('item_id').primary()
        tbl.integer('truck_id').unsigned().notNullable()
        .references('truck_id').inTable('trucks')
        .onUpdate('CASCADE').onDelete('CASCADE')
        tbl.text('item_name', 128).notNullable()
        tbl.text('item_description', 128)                       //might make nullable later
        tbl.text('item_img_url', 128)                           //might make nullable later or add default url?
        tbl.decimal('item_price').notNullable()
    })

    .createTable('trucks_reviews', tbl => {
        tbl.increments('review_id').primary()
        tbl.integer('truck_id').unsigned().notNullable()
        .references('truck_id').inTable('trucks')
        .onUpdate('CASCADE').onDelete('CASCADE')
        tbl.integer('user_id').unsigned().notNullable()
        .references('user_id').inTable('users')
        .onUpdate('CASCADE').onDelete('CASCADE')
        tbl.integer('food_quality_star_count').notNullable()
        tbl.integer('service_star_count').notNullable()
        tbl.integer('cleanliness_star_count').notNullable()
        tbl.text('comment', 228)
    })

    .createTable('user_favorites', tbl => {
        tbl.increments('id').primary()
        tbl.integer('user_id').unsigned().notNullable()
        .references('user_id').inTable('users')
        .onUpdate('CASCADE').onDelete('CASCADE')
        tbl.integer('truck_id').unsigned().notNullable()
        .references('truck_id').inTable('trucks')
        .onUpdate('CASCADE').onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('user_favorites')
    .dropTableIfExists('trucks_reviews')
    .dropTableIfExists('menus')
    .dropTableIfExists('trucks')
    .dropTableIfExists('users')
};
