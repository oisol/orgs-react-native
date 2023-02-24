import { Image, ScrollView, StyleSheet, View } from "react-native";
import Texto from "../../components/Texto";
import Details from "./components/Details";
import Header from "./components/Header";
import Items from "./components/Items";

const Cart = ({ header, details, items }) => {
    return (
        <ScrollView>
            < Header {...header}/>
            <View style={styles.cesta}>
                <Details {...details}/>
                <Items {...items}/>
            </View>
        </ScrollView>

    )
};

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});

export default Cart;