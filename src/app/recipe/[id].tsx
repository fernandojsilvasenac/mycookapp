import { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";

import { services } from "@/services";
import { Loading } from "@/components/Loading";
import { Step } from "@/components/Step";

import { styles } from './styles';


export default function Recipes(){
    const [recipe, setRecipe] = useState<RecipeResponse | null>(null)
    const [preparations, setPreparations] = useState<PreparationsResponse[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useLocalSearchParams<{id: string}>() 

    useEffect( () =>{
        if (id)
            services.recipes
                .show(id)
                .then( (response) => setRecipe(response))
                .finally( () => setIsLoading(false) )
    }, [])

    useEffect( () =>{
        if (id)
            services.preparations
                .findByRecipeId(id)
                .then( (response) => setPreparations(response))
                .finally( () => setIsLoading(false) )
    }, [])

    if (isLoading){
        return <Loading />
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: recipe?.image }} style={styles.image}/>
            <View style={styles.body}>
                <View style={styles.header}>
                    <MaterialIcons
                        size={32}
                        name="arrow-back"
                        onPress={()=> router.back()}
                    />
                    <Text style={styles.name}>{recipe?.name}</Text>
                    <Text style={styles.time}>{recipe?.minutes} minutos de preparo</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.preparation}>Modo de preparo</Text>
                    <FlatList
                        data={preparations}
                        renderItem={({item}) => (
                            <Step 
                                step={item.step} 
                                description={item.description}
                            />
                        )}
                        contentContainerStyle={{ gap:28 }}
                        showsVerticalScrollIndicator={false}
                        style={styles.containerScroll}
                    />
                </View>
            </View>
        </View>
    )
}