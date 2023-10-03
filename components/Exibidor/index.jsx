import { Text, View } from "react-native";
import { styles } from "./styles";


export function Exibidor(props){

    return(
        <View style={[styles.container, props.style]}>
            <Text style={styles.identificador}>{props.identificador}</Text>
            <Text style={styles.valor}>R$  {props.valor}</Text>
        </View>
    )
}