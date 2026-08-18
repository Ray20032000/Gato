import {Text, View, StyleSheet} from 'react-native';
import Esp from "../components/Esp";


export default function Especies () {
    return (
        <View style={styles.itens}>
            <Text>
                Veja gatitos bonitinhos e suas espécies!!
            </Text>
            <Esp />
        </View>
    )
}

const styles = StyleSheet.create({
    itens: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#cfc0f4'
    }
})