import { Image, StyleSheet, View } from "react-native";
import Texto from "../../components/Texto";
import Details from "./components/Details";
import Header from "./components/Header";

const Cart = ({ header, details }) => {
    return (
        <>
            < Header {...header}/>
            <View style={styles.cesta}>
                <Details />
            </View>
        </>

    )
};

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});

export default Cart;