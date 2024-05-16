import { Pressable, PressableProps, Text, Image } from 'react-native'
import { styles } from './styles'

export type ingredientsProps = {
    name: string
    image: string
    selected?: boolean
}

export function Ingredient({
    name, 
    image,
    selected = false,
    ...rest
}:ingredientsProps & PressableProps ){
    return(
        <Pressable style={[styles.container, selected && styles.selected ]}
            {...rest}
        >
            <Image 
                source={ require("@/assets/apple.png")} 
                style={styles.image} 
            />
            <Text>{name}</Text>
        </Pressable>
    )
}