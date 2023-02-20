import { Image, StyleSheet, Dimensions } from 'react-native';

import Texto from '../../../components/Texto';
import topo from "../../../../assets/topo.png";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Header = () => {
    return (
        <>
            <Image source={topo} style={styles.topo} />
            <Texto style={styles.titulo}>Detalhe da cesta</Texto>
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
});

export default Header;
