exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('users', function (table) {
        table.increments();
        table.string('name');
        table.string('email');
        table.string('password');
        table.text('address');
        table.string('avatar');
        table.integer('phone');
        table.boolean('sex').defaultTo(1);
        table.integer('level').defaultTo(1);
        table.boolean('active').defaultTo(false);
        table.timestamps();
    });
    
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};