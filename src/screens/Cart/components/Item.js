import { View, Image, StyleSheet } from 'react-native';
import Texto from '../../../components/Texto'

const Item = ({ item: { name, image }}) => {

    return (
        <View style={styles.item}>
            <Image source={image} style={styles.imagem}/>
            <Texto style={styles.nome}>{ name }</Texto>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center"

    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})

export default Item;