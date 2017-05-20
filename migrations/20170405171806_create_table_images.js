exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('images', function (table) {
        table.increments();
        table.string('path');
        table.integer('users_id');
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('images');
};