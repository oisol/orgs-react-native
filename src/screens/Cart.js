import { Image, StyleSheet, Dimensions, Text } from "react-native";
import topo from "../../assets/topo.png";

const width = Dimensions.get('screen').width;

const Cart = () => {
    return (
        <>
            <Image source={topo} style={styles.topo} />
            <Text style={styles.titulo}>Detalhe da cesta</Text>
        </>

    )
};

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        heigth: (578 / 1080 * width),
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
    }
});

export default Cart;