import { Ingredient, ingredientsProps } from "@/components/ingredient"
import { ScrollView } from "react-native"
import { services } from "@/services"
import { styles } from './styles';

type Props ={
    ingredients: ingredientsProps[]
}

export function Ingredients( { ingredients }: Props) {
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
        >
            {ingredients.map( (ingredient) => (
                <Ingredient
                    key={ingredient.name}
                    name={ingredient.name}
                    image={`${services.storage.imagePath}/${ingredient.image}`}
                />    
            ))}
        </ScrollView>
    )
}