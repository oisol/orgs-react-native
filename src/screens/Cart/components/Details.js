import { View, Image, StyleSheet } from "react-native";

import Texto from "../../../components/Texto";

const Details = ( { nome, logoFazenda, nomeFazenda, descricao, preco } ) => {
    return (
        <>         
            <Texto style={styles.nome}>{ nome }</Texto>

            <View style={styles.fazenda}>
                <Image source={ logoFazenda } style={styles.imagemFazenda}/>
                <Texto style={styles.nomeFazenda}>{ nomeFazenda }</Texto>
            </View>

            <Texto style={styles.descricao}>
                { descricao }
            </Texto>

            <Texto style={styles.preco}>R$ { preco }</Texto>
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