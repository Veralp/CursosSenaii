import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import cursos, { modalidades } from '../mocks/cursosMock'

import CursosLista from '../components/ListaCursos'

export default function ModalidadeScreen({ navigation }) {

    const abrirCursos = (dados) => {
        navigation.navigate('Cursos', { dados });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={modalidades}
                style={styles.list}
                renderItem={({ item }) => <TouchableOpacity style={styles.item} onPress={() => abrirCursos(item)}>
                    <Text>Modalidade: {item}</Text>
                </TouchableOpacity>}
            />
        </View >);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
    },
});