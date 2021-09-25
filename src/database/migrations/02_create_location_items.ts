import { Knex } from "knex";

export async function up({ schema }: Knex) {
    return schema.createTable('locations_items', table => {
        table.increments('id').primary();
        table.integer('location_id')
            .nullable()
            .references('id')
            .inTable('lovations');
        table.integer('item_id')
            .nullable()
            .references('id')
            .inTable('items');
    })
}
export async function down({ schema }: Knex) {
    return schema.dropTable('locations_items')
}