import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,    
} from '@expo-google-fonts/poppins'

SplashScreen.preventAutoHideAsync()

export default function Layout(){
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,  
    })

    if(!fontsLoaded){
        return
    }

    SplashScreen.hideAsync()


    return (
        <>  
            <StatusBar style='dark' />
            <Slot /> 
        </>

    )
    
}