import { useEffect, useState } from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import { styles } from './styles';
import { Ingredient } from '@/components/ingredient';
import { Selected } from '@/components/selected';

import { services } from '@/services';
import { router } from 'expo-router';

export default function Home(){
    const [selected, setSelected] = useState<string[]>([])
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

    function handleToggleSelected(value: string){
        if(selected.includes(value)){
            return setSelected( (state) => state.filter( (item) => item !== value) )
        }
        setSelected( (state) => [...state, value])
    }

    function handleClearSelected(){
        Alert.alert("Limpar", "Deseja limpar tudo?",[
            {text: "Não", style: "cancel"},
            {text: "Sim", onPress: () => setSelected([]) },
        ])
    }

    function handleSearch(){
        router.navigate("/recipes/" + selected)
    }

    useEffect(() => {
        services.ingredients.findAll().then(setIngredients)
        // console.log(ingredients)
    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>
            <Text style={styles.message}>
                Descuba receitas baseadas nos produtos que você escolheu
            </Text>
            {/* <Ingredient /> */}
            <ScrollView 
                contentContainerStyle={styles.ingredients}
                showsVerticalScrollIndicator={false}
            >
                {ingredients.map( (item) => (
                    <Ingredient key={item.id}  
                        name={item.name}
                        image={`${services.storage.imagePath}/${item.image}`}
                        selected={selected.includes(item.id)}
                        onPress={() => handleToggleSelected(item.id)}
                    />
                ))}
            </ScrollView>  
            { selected.length > 0 &&
                <Selected 
                    quantity={selected.length} 
                    onClear={handleClearSelected}
                    onSearch={handleSearch}
                />          
            }
        </View>
    )
}

// {Array.from( {length:100} ).map( (item, index) => (
//     <Ingredient key={index}  
//         name="Maça" image="" 
//         selected={selected.includes(String(index))}
//         onPress={() => handleToggleSelected(String(index))}
//     />
// ))}
