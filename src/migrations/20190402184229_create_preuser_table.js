/**
 * Create pre_users table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('pre_users', table => {
    table.increments();
    table.string('email').notNullable();
    table.string('token').notNullable().index();
  });
}

/**
 * Drop pre_users table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('pre_users');
}
