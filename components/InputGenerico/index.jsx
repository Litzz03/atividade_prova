import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";


export function InputGenerico(props){

    return(
        <View style={[styles.container, props.width]}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <TextInput
                style={styles.input}
                onChangeText={props.setValor}
                value={props.valor}></TextInput>
        </View>
    )
}