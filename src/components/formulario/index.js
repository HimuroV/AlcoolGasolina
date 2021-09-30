import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Resultado from './Resultado';

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
            setResposta("O custo benefício é o mesmo para os dois!");
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
        setRespostaAlcool(null);
        setRespostaGasolina(null);
        setTextBotao("Calcular");
        setResposta("Preencha os valores pedidos!");
    }

  return (
    <View>
        <View>
            <Text>Valor do litro do Álcool</Text>
            <TextInput
                onChangeText={setLitroAlcool}
                value={litroAlcool}
                placeholder="Ex: 3.65"
                keyboardType="numeric"
            ></TextInput>
            <Text>Km por litro de Álcool</Text>
            <TextInput
                onChangeText={setKmAlcool}
                value={kmAlcool}
                placeholder="Ex: 7"
                keyboardType="numeric"
            ></TextInput>
            <Text>Valor do litro da Gasolina</Text>
            <TextInput
                onChangeText={setLitroGasolina}
                value={litroGasolina}
                placeholder="Ex: 5.85"
                keyboardType="numeric"
            ></TextInput>
            <Text>Km por litro de Gasolina</Text>
            <TextInput
                onChangeText={setKmGasolina}
                value={kmGasolina}
                placeholder="Ex: 9"
                keyboardType="numeric"
            ></TextInput>
            <Button
                onPress={validaResposta}
                title={textBotao}/>
        </View>
        <Resultado resultado={resposta}/>
    </View>
  );
}