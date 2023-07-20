

import data from "../api/data/bookmakers.json"

type Item = {
    bookmaker_id: string;
    name: string;
}[]

export async function fetchBookmaker(id: string | number): Promise<Item> {

    let item  = data.filter((bm) => bm.bookmaker_id === id)

    return item;
}