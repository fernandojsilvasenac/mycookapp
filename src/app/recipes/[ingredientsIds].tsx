import { View, Text, FlatList } from "react-native"
import { styles } from './styles';
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Recipe } from "@/components/Recipe";
import { useEffect, useState } from "react";
import { services } from "@/services";
import { Ingredients } from "@/components/ingredients";

export default function Recipes(){
    const [recipes, setRecipes] = useState<RecipeResponse[]>([])
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
    // loading?: boolean | { delay?: number };

    
    const params = useLocalSearchParams<{ingredientsIds: string}>() 

    const ingredientesIds = params.ingredientsIds ? params.ingredientsIds.split(",") : [];
    
    // lista os ingredientes selecionados na tela anterior
    useEffect( () => {
        services.ingredients.findByIds(ingredientesIds).then(setIngredients)
    },[])

    // Receitas
    useEffect( () => {
        services.recipes.findByIngredientsIds(ingredientesIds).then(setRecipes)
        console.log(recipes)
    },[])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="arrow-back"
                    size={32}
                    onPress={ () => router.back()}
                />
            </View>
            <Text style={styles.title}>Ingredientes</Text>

            <Ingredients ingredients={ingredients} />

            <FlatList
                data={recipes}
                keyExtractor={(item) => item.id}
                renderItem={ ({item}) => (
                    <Recipe recipe={item}
                        onPress={ () => router.navigate("/recipe/" + item.id)}
                    />
                )}
                style={styles.recipes}
                contentContainerStyle={styles.recipesContent}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{gap:16}}
                numColumns={2}

            />    
        </View>
    )
}