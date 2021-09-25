import { Knex } from "knex";

export async function up({ schema }: Knex) {
    return schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('title').nullable();
        table.string('image').nullable();
    })
}
export async function down({ schema }: Knex) {
    return schema.dropTable('items')
}