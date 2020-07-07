import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

function BoasVindas(props) {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
    const [mostraMensagem, setMostraMensagem] = useState(false);

    const _apresentarMensagem = () => {
      if (!nome == '' && !sobrenome == '') {
        setMostraMensagem(true);
      } else {
      Alert.alert(
            'Preenchimento obrigatório',
            'Informe o nome e o sobrenome!',
            [
                 { text: 'OK' },
            ],
        ); 
    }
}  

const _limpar = () => {
setNome(' ');
setSobrenome(' ');
setMostraMensagem(false);
}

return (
    <View style={styles.container}>


        <Text style={styles.titulo}>Identifique-se</Text>
        
        <TextInput
            style={styles.campo}
            placeholder="Digite seu nome"
            onChangeText={nome => setNome (nome) }
            value={nome}
        />

        <TextInput
            style={styles.campo}
            placeholder="Digite seu sobrenome"
            onChangeText={sobrenome => setSobrenome (sobrenome)}
            value={sobrenome}
        />

<View style={styles.botaoContainer}>
    <Button
        onPress={_apresentarMensagem}
        title="ok"
    />
</View>

{mostraMensagem && (
    <View>
        <Text style={styles.textos} >olá, {nome} {sobrenome}! {props.saudacao}</Text>
        <Text style={styles.textos}>{mensagem}</Text>
    </View>
)}

    <View style={styles.botaocontainer}>
        <Button
            onPress={_limpar}
            title="Limpar"
        />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
     backgroundcolor:'#00008B',
     width: 300,
     borderRadius: 5,
     padding: 10,
     margin: 10
    },
    titulo: {
        fontSize: 16,
        color: '#4682B4',
        fontweight:'bold',
        textAlign: "center",
    },
    textos: {
        fontsize: 14,
        color: '#4682B4',
        textAlign: "center",
    },
    campo: {
        backgroundcolor: '#00008B',
        fontsize: 14,
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 5,
        height: 35,
    },
    botaoContainer: {
        marginBottom: 5,
        margintop: 5,
        borderRadius: 5,
    },
});
export default BoasVindas;