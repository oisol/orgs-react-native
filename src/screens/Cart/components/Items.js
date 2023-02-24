import { View, Image, StyleSheet } from 'react-native';
import Texto from '../../../components/Texto'

const Items = ({  title, list }) => {
  return (
    <>
        <Texto style={styles.titulo}>{title}</Texto>
        { list.map(( {name, image} ) => {
            return(
                <View key={name} style={styles.item}>
                    <Image source={image} style={styles.imagem}/>
                    <Texto style={styles.nome}>{ name }</Texto>
                </View>
            )
        }) }
    </>
  )
}

const styles = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    }, 
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
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

export default Items;