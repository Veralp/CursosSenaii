import { View, Image, StyleSheet, Text } from "react-native";


export default function ListaCursos({ item }) {

    return (
        <View style={styles.item}>
            <Image style={styles.img} source={item.img} />
            <View>
                <Text style={styles.text}>Tipo: {item.tipo}</Text>
                <Text style={styles.text}>Nome: {item.nome}</Text>
                <Text style={styles.text}>Duração: {item.duracao }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        margin: 5,
    },
    text: {
        fontSize: 16,
        margin: 8,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        borderBottomColor: '#999',
        borderBottomWidth: 1,
    },
});