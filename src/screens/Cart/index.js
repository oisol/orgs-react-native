import { FlatList, StyleSheet, View } from "react-native";

import Details from "./components/Details";
import Header from "./components/Header";
import Item from "./components/Item";
import Texto from "../../components/Texto";

const Cart = ({ header, details, items }) => {
    return (
        <>
            <FlatList
                data={items.list}
                renderItem={Item}
                keyExtractor={({ name }) => name }
                ListHeaderComponent={() => {
                    return (
                        <>
                            < Header {...header}/>
                            <View style={styles.cesta}>
                                <Details {...details}/>
                                <Texto style={styles.titulo}>{items.title}</Texto>
                            </View>
                        </>
                    )
                }}
            />
            

        </>

    )
};

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    }, 
});

export default Cart;