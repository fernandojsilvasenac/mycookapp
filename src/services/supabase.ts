// import "react-native-url-polyfill/auto"
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? ""
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? ""

// Verifica se as variáveis de ambiente estão definidas
if (!supabaseUrl || !supabaseKey){
    throw new Error("As variáveis de ambiente não foram configuradas corretamente!")
}
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase