import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Texto from "../../../components/Texto";

const Details = ( { nome, logoFazenda, nomeFazenda, descricao, preco, button } ) => {
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

            <TouchableOpacity style={styles.botao} onPress={() => {}}>
                <Texto style={styles.textoBotao}>
                    {button}
                </Texto>
            </TouchableOpacity>
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
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        fontHeight: 26,
        fontWeight: "bold",
    },
});

export default Details;