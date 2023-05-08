import React from 'react';
import { View, StyleSheet, Text, Image, Linking } from 'react-native';

export default function DetalhesScreen({ navigation, route }) {
    const curso = route.params.dados
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={curso.img}></Image>
            <View style={styles.textos}>
                <Text style={styles.text}>Curso: {curso.nome} </Text>
                <Text style={styles.text}>Descrição: {curso.descricao}</Text>
                <Text style={styles.text}>Duração: {curso.duracao}</Text>
                <Text style={styles.text}>Valor: {curso.valor}</Text>
                <Text style={styles.text} onPress={()=>{Linking.openURL(curso.link);}}>Saiba mais</Text>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    img: {
        width: '80%',
        height: '800%',
        maxHeight: 300,
    },
    textos:{
        width: '80%',
    },
    text:{
        fontSize: 16,
        margin: 5,
    }
});