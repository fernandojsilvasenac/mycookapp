import { View, Text } from "react-native"
import Animated, {SlideInDown, BounceOutDown} from "react-native-reanimated"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from './styles'
import { theme } from '@/theme'

export function Selected(){
    return(
        <Animated.View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.label}>?? ingredientes selecionados</Text>
                <MaterialIcons
                    name="close"
                    size={24}
                    color={theme.colors.gray_400}
                />
            </View>

        </Animated.View>
    )
}