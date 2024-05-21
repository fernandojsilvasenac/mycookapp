import { useState } from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import { styles } from './styles';
import { Ingredient } from '@/components/ingredient';
import { Selected } from '@/components/selected';

export default function Home(){
    const [selected, setSelected] = useState<string[]>([])

    function handleToggleSelected(value: string){
        // console.log(value);
        if(selected.includes(value)){
            return setSelected( (state) => state.filter( (item) => item !== value) )
        }
        setSelected( (state) => [...state, value])
        // console.log(selected.length);
    }

    function handleClearSelected(){
        Alert.alert("Limpar", "Deseja limpar tudo?",[
            {text: "Não", style: "cancel"},
            {text: "Sim", onPress: () => setSelected([]) },
        ])
        
    }

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
                {Array.from( {length:100} ).map( (item, index) => (
                    <Ingredient key={index}  
                        name="Maça" image="" 
                        selected={selected.includes(String(index))}
                        onPress={() => handleToggleSelected(String(index))}
                    />
                ))}
            </ScrollView>  
            { selected.length > 0 &&
                <Selected 
                    quantity={selected.length} 
                    onClear={handleClearSelected}
                    onSearch={() => {}}
                />          
            }
        </View>
    )
}