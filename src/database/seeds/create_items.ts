import { Knex } from "knex";
import { Item } from "../../../@types/item";

export async function seed(knex: Knex) {

    const data: Item[] = [
        { title: "Papéis e Papelão", image: "papel.png" },
        { title: "Vidro e Lâmpadas", image: "vidro.png" },
        { title: "Óleo de Cozinha", image: "oleo.png" },
        { title: "Residuos Orgânicos", image: "organico.png" },
        { title: "Baterias e Pilhas", image: "bateria.png" },
        { title: "Eletênicos", image: "eletronico.png" }
    ]

    await knex('items').insert(data)
}