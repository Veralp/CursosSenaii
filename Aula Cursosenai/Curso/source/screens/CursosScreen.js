import { Text, FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react"
import ListaCursos from "../components/ListaCursos";
import fic from "../mocks/ficMock";
import cai from "../mocks/caiMock";
import tec from "../mocks/tecMock";

export default function CursosScreen({ navigation, route }) {
    const curso = route.params.dados
    const [cursoState, setCursoState] = useState([])

    const abrirCursos = (dados) => {
        navigation.navigate('Detalhes', { dados });
    }

    useEffect(() => {
        if (curso === "FIC") {
            setCursoState(fic)
            return
        }
        if (curso === "CAI") {
            setCursoState(cai)
            return
        }
        if (curso === "Técnico") {
            setCursoState(tec)
            return
        }
    }, [curso])

    return (
        <View style={styles.container}>
            <FlatList
                data={cursoState}
                style={styles.list}
                renderItem={({ item }) => <TouchableOpacity style={styles.item} onPress={() => abrirCursos(item)}>
                    <ListaCursos item={item} />
                </TouchableOpacity>}
            />
        </View >);
}

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