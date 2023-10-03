import { Button, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { InputGenerico } from "../../components/InputGenerico";
import { Exibidor } from "../../components/Exibidor";
import { useState } from "react";

export function Home (){

    const [idade, setIdade] = useState(0)
    const [acrescimoIdade, setAcrescimoIdade] = useState(0.0)

    const [ano, setAno] = useState(0)
    const [acrescimoAno, setAcrescimoAno] = useState(0.0)

    const [total, setTotal] = useState(1000.00)

    function limpar(){
        setIdade(0)
        setAcrescimoIdade(0.0)
        setAno(0)
        setAcrescimoAno(0.0)
        setTotal(1000.00)
    }
    function calcular(){
        const totalCalculo = 1000
        if (Idade <= 22){
            totalCalculo = totalCalculo + (totalCalculo* 0.20)
            setAcrescimoIdade(totalCalculo*0.20)
        } else if (idade <= 28){
            totalCalculo = totalCalculo + (totalCalculo * 0.18)
            setAcrescimoIdade(totalCalculo*0.18)
        }else {
            totalCalculo = totalCalculo - (totalCalculo* 0.15)
            setAcrescimoIdade(totalCalculo*0.15)
        }

        if (ano <= 2000){
            totalCalculo = totalCalculo + (totalCalculo* 0.30)
            setAcrescimoAno(totalCalculo*0.30)
        } else if (ano <= 2009){
            totalCalculo = totalCalculo + (totalCalculo* 0.15)
            setAcrescimoAno(totalCalculo*0.15)
        } else if (ano <= 2015){
        } else {
            totalCalculo = totalCalculo - (totalCalculo* 0.10)
            setAcrescimoAno(totalCalculo*0.10)
        }
        setTotal(totalCalculo)
    }
    return(
        <View style={styles.container}>
            <View style={styles.cabecario}>
                <Text style={styles.titulo}>SIMULACAR</Text>
            </View>
            <InputGenerico titulo="Nome" width={styles.inputNome}/>
            <InputGenerico titurlo="Carro" width={styles.inputCarro}/>
            <View style={styles.conjuntoInputs}>
                <InputGenerico titulo="Idade" width={styles.inputIdade} value={idade} setValor={setIdade}/>
                <InputGenerico titulo="Ano" width={styles.inputAno} value={ano} setValor={setAno}/>
            </View>

            <TouchableOpacity 
            style={styles.buttonCalcular}
            onPress={calcular}>
                <Text style={styles.textButton}>Calcular</Text>
            </TouchableOpacity>

            <Exibidor identificador="Acréscimo por idade" valor= {acrescimoIdade} style={styles.exibidorIdade}/>
            <Exibidor identificador="Acréscimo por Ano" valor= {acrescimoAno}   style={styles.exibidorAno}/>
            <Exibidor identificador="Valor do seguro anual é" valor= {total}   style={styles.exibidorTotal}/>

            <TouchableOpacity 
                style={styles.buttonLimpar}
                onPress={limpar}>
                <Text style={styles.textButton}>Limpar</Text>
            </TouchableOpacity>
        </View>
    )
}