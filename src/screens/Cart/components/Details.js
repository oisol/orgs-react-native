import { View, Image, StyleSheet } from "react-native";

import Texto from "../../../components/Texto";
import logo from "../../../../assets/logo.png"


const Details = () => {
    return (
        <>         
            <Texto style={styles.nome}></Texto>

            <View style={styles.fazenda}>
                <Image source={logo} style={styles.imagemFazenda}/>
                <Texto style={styles.nomeFazenda}></Texto>
            </View>

            <Texto style={styles.descricao}>
                
            </Texto>

            <Texto style={styles.preco}>R$ </Texto>
        </>
    )
};

const styles = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: "bold",
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

export default Details;