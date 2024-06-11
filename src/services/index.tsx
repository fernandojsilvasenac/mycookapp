import * as ingredients from "./ingredientsServices"
import * as recipes from "./recipesServices"

export const services = {
    ingredients,
    recipes,

    storage:{
        imagePath: "https://zcspuupbusjskptoupoa.supabase.co/storage/v1/object/public/ingredients"
    }
}