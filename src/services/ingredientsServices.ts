import { supabase } from "./supabase";

async function findAll(){
    const { data } = await supabase
        .from("ingredients")
        .select()
        .order("name")
        .returns<IngredientResponse[]>()

        return data ?? [];
}

async function findByIds(ids: string[]){
    const { data } = await supabase
        .from("ingredients")
        .select()
        .in("id", ids)
        .order("name")
        .returns<IngredientResponse[]>()
    
    return data ?? []
}

async function findByRecipeId(id: string){
    const { data } = await supabase 
        .from("recipes_ingredients")
        .select("ingredients (id, name, image)")
        .eq("recipe_id", id)
        .returns<{ingredients: IngredientResponse}[]>()

    console.log(data)

    return data ? data.map((item) => item.ingredients):[]
}

async function findIngredientsRecipeId(id: string){
    const { data: recipeIngredientsData } = await supabase  
        .from("recipes_ingredients")
        .select("ingredient_id")
        .eq("recipe_id", id);
    
    const ingredientsIds = recipeIngredientsData?.map((item:any) => item.ingredient_id) || [];
    const { data: intredientsData } = await supabase
        .from("ingredients")
        .select("id, name, image")
        .in("id", ingredientsIds)

    return intredientsData || [];
}


export { findAll, findByIds, findByRecipeId, findIngredientsRecipeId }
