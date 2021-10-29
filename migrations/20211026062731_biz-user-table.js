
exports.up = function(knex) {
return knex.schema.createTable('taps', (table) => {
    table.increments('id').primary()
    })
    .createTable('business_users', (table) => {
    table.string('id').primary()
    table.string('business_name')
    table.string('username')
    table.string('email')
    table.timestamp('created_on').defaultTo(knex.fn.now())
    })
    .createTable('tapsToUsers', (table) => {
        table.increments('id').primary()
        table.string('business_user_id').references('business_users.id')
        table.integer('tap_id').references('taps.id')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tapsToUsers').dropTable('business_users').dropTable('taps')
};
