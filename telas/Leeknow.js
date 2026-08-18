import {Text, View, StyleSheet, Button, Image} from 'react-native';

export default function Leeknow ({navigation}) {
    return (
        <View style={styles.itens}>
            <Text>
                Você sabia que o LeeKnow do Stray Kids tem três gatos??
            </Text>

            <Text>
                O Soonie, o Doongie e o Dori!
            </Text>
            <Text>
                São três machos
            </Text>

            <Image style={styles.image} source={require('../assets/gatitos.jpg')} />
            <Image style={styles.image} source={require('../assets/LeeKnow.jpg')} />


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