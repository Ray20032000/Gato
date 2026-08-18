import {Text, View, StyleSheet, Button, Image} from 'react-native';

export default function Home ({navigation}) {
    return (
        <View style={styles.itens}>
            <View style={styles.conteiner}>
                <Text style={styles.texto}>
                    Você gosta de gatinhos fofos?
                    aqui você pode ver gatinhos o dia todinho e aprender mais sobre eles!
                </Text>
                <Image style={styles.pata} source={require("./../assets/patinha.png")} />

            </View>

            <View style={styles.container}>
                <Button title={"Especies"} onPress={function () {
                    navigation.navigate("Especies");
                }} color={'#651cdc'}></Button>
                <Button title={"Curiosidades"} onPress={function () {
                    navigation.navigate("Curiosidades");
                }} color={'#651cdc'}></Button>
                <Button title={"Galeria"} onPress={function () {
                    navigation.navigate("Galeria");
                }} color={'#651cdc'}></Button>
                <Button title={"Você sabia?"} onPress={function () {
                    navigation.navigate("Leeknow");
                }} color={'#651cdc'}></Button>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: '#cfc0f4',
        borderStyle: 'solid',
        borderColor: '#771eff',
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
    },
    pata: {
        width: 100,
        height: 80,
        position: 'relative',
        left: 325,
        bottom: 100
    },
    itens: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#e8d1ff'
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        width: 350
    },
    container: {
        justifyContent: 'center',
        position: 'relative',
        top: 250,


    }
})