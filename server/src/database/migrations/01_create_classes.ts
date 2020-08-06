import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        // onDelete('CASCATE'): se o id for deletado, automaticamente tods os dados relacionado com o id também é deletado
    });
}

// desfazer alterações
export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}