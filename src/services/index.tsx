import * as ingredients from "./ingredientsServices"
import * as recipes from "./recipesServices"
import * as preparations from "./preparationsServices"

export const services = {
    ingredients,
    recipes,
    preparations,

    storage:{
        imagePath: "https://zcspuupbusjskptoupoa.supabase.co/storage/v1/object/public/ingredients"
    }
}