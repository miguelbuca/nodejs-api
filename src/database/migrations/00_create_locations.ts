import { Knex } from "knex";

export async function up({ schema }: Knex) {
    return schema.createTable('locations', table => {
        table.increments('id').primary();
        table.string('name').nullable();
        table.string('image').nullable();
        table.string('email').nullable();
        table.string('whatsapp').nullable();
        table.decimal('latitude').nullable();
        table.decimal('longitude').nullable();
        table.string('city').nullable();
        table.string('uf').nullable();
    })
}
export async function down({ schema }: Knex) {
    return schema.dropTable('locations')
}