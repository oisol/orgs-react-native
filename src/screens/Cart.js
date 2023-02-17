import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png"

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Cart = () => {
    return (
        <>
            <Image source={topo} style={styles.topo} />
            <Text style={styles.titulo}>Detalhe da cesta</Text>

            <View style={styles.cesta}>
                <Text style={styles.nome}>Cesta de Verduras</Text>

                <View style={styles.fazenda}>
                    <Image source={logo} style={styles.imagemFazenda}/>
                    <Text style={styles.nomeFazenda}>Jenny jack Farm</Text>
                </View>

                <Text style={styles.descricao}>
                    Uma cesta com produtos selecionados 
                    cuidadozamente da fazenda direto para 
                    sua cozinha.
                </Text>

                <Text style={styles.preco}>R$ 40,00</Text>
            </View>
        </>

    )
};

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / height * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white", 
        fontWeight: "bold",
        padding: 16
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: "normal",
        fontFamily: "MontserratBold"
    },
    fazenda: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        fontHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular"
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        fontHeight: 42,
        marginTop: 8,
    },

});

export default Cart;