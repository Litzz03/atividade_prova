import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center"
    },
    cabecario:{
        height: 87,
        width: "100%",
        backgroundColor: "#2A679F",
        alignItems: "center",
        justifyContent: "center"
    },
    titulo:{
        fontSize: 25,
        color: "#FFFFFF"
    },
    inputNome:{
        width: 420
    },
    inputCarro:{
        width: 420
    },
    inputIdade:{
        width: 180
    },
    inputAno:{
        width: 180
    },
    conjuntoInputs:{
        flexDirection:"row",
        gap: 60
    },
    buttonCalcular:{
        width: 400,
        height: 50,
        backgroundColor:"#0059AA",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40
    },
    textButton:{
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "bold"
    },
    exibidorIdade:{
        backgroundColor: "#9B4EA1",
        height: 60,
        flexDirection: "row",
        gap: 100
    },
    exibidorAno:{
        backgroundColor: "#3857C1DE",
        height: 60,
        flexDirection: "row",
        gap: 100
    },
    exibidorTotal:{
        backgroundColor: "#386B30",
        height: 160,
        gap: 50
    },
    buttonLimpar:{
        backgroundColor: "#D32904",
        width: 175,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginTop: 40
    }
})