import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Resultado from './Resultado';
import styles from './style';

export default function Formulario() {

    const[litroAlcool, setLitroAlcool] = useState(null);
    const[kmAlcool, setKmAlcool] = useState(null);
    const[litroGasolina, setLitroGasolina] = useState(null);
    const[kmGasolina, setKmGasolina] = useState(null);
    const[resposta, setResposta] = useState("");
    const[textBotao, setTextBotao] = useState("Calcular");

    function calculaResposta(){
        if ((litroAlcool / kmAlcool) < (litroGasolina / kmGasolina)) {
            return setResposta("Álcool é mais vantajoso!");
        } else if ((litroAlcool / kmAlcool) > (litroGasolina / kmGasolina)) {
            return setResposta("Gasolina é mais vantajoso!");
        }
        else{
            setResposta("Mesmo custo-benefício!");
            return;
        }
    }

    function validaResposta(){
        if(litroAlcool != null && kmAlcool != null && litroGasolina != null && kmGasolina != null) {
            calculaResposta();
            setTextBotao("Calcular Novamente");
            setLitroGasolina(null);
            setLitroAlcool(null);
            setKmAlcool(null);
            setKmGasolina(null);
            return;
        }
        setTextBotao("Calcular");
        setResposta("Preencha os valores pedidos!");
    }

  return (
    <View style ={styles.formContext}>
        <View style = {styles.form}>
            <Text style = {styles.formLabel}>Valor do litro do Álcool</Text>
            <TextInput
                style={styles.input}
                onChangeText={setLitroAlcool}
                value={litroAlcool}
                placeholder="Ex: 3.65"
                keyboardType="numeric"
            ></TextInput>
            <Text style = {styles.formLabel}>Km por litro de Álcool</Text>
            <TextInput
                style={styles.input}
                onChangeText={setKmAlcool}
                value={kmAlcool}
                placeholder="Ex: 7"
                keyboardType="numeric"
            ></TextInput>
            <Text style = {styles.formLabel}>Valor do litro da Gasolina</Text>
            <TextInput
                style={styles.input}
                onChangeText={setLitroGasolina}
                value={litroGasolina}
                placeholder="Ex: 5.85"
                keyboardType="numeric"
            ></TextInput>
            <Text style = {styles.formLabel}>Km por litro de Gasolina</Text>
            <TextInput
                style={styles.input}
                onChangeText={setKmGasolina}
                value={kmGasolina}
                placeholder="Ex: 9"
                keyboardType="numeric"
            ></TextInput>
            <TouchableOpacity
                style = {styles.botao}
                onPress={() => {
                    validaResposta()
                }}
            >
                <Text style={styles.formTextoBotao}> {textBotao}</Text>    
            </TouchableOpacity>
        </View>
        <Resultado resultado={resposta}/>
    </View>
  );
}