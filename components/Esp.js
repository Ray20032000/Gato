import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default function Esp () {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Angorá Turco</Text>
                <Image source={require('./../assets/Angorá Turco.jpg')} />
            </View>
            <View style={styles.container}>
                <Text>Bengal</Text>
                <Image source={require('./../assets/Bengal.jpg')} />
            </View>
            <View style={styles.container}>
                <Text>British Shorthair</Text>
                <Image source={require('./../assets/British Shorthair.jpg')} />
            </View>
            <View style={styles.container}>
                <Text>Maine Coon</Text>
                <Image source={require('./../assets/Maine Coon.jpg')} />
            </View>
            <View style={styles.container}>
                <Text>Persa</Text>
                <Image source={require('./../assets/Persa.jpg')} />
            </View>
            <View style={styles.container}>
                <Text>Sphynx</Text>
                <Image source={require('./../assets/Sphynx.jpg')} />
            </View>
            <View style={styles.container}>
                <Text>Siamês</Text>
                <Image source={require('./../assets/Siamês.jpg')} />
            </View>
            <View style={styles.container}>
                <Text>Ragdoll</Text>
                <Image source={require('./../assets/Ragdoll.jpg')} />
            </View>
        </ScrollView>
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