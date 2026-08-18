import {Text, View, StyleSheet, Button, Image} from 'react-native';

export default function Curiosidades ({navigation}) {
    return (
        <View style={styles.itens}>
            <Text>
                Pra você que é fã dos felinos mais fofos, temos curiosidades interessantes
            </Text>

            <Text>
                💤 Gatos dormem muito: podem dormir entre 12 e 16 horas por dia, e alguns chegam a dormir ainda mais.
            </Text>
            <Text>
                👃 O nariz de cada gato é único, parecido com uma impressão digital humana.
            </Text>
            <Text>
                👂 Eles conseguem mexer as orelhas separadamente e têm dezenas de músculos só para controlar essa região.
            </Text>
            <Text>
                🌙 Enxergam muito melhor no escuro do que nós, embora não consigam enxergar na escuridão completa.
            </Text>
            <Text>
                😺 Gatos normalmente não miam muito entre si: o miado é usado principalmente para se comunicar com humanos.
            </Text>
            <Text>
                🐾Eles andam apoiados nos dedos, e não na planta inteira da pata.
            </Text>
            <Text>
                💨 Podem correr aproximadamente 48 km/h em distâncias curtas.
            </Text>
            <Text>
                👅 A língua do gato é áspera porque possui pequenas estruturas parecidas com ganchinhos, que ajudam na limpeza dos pelos.
            </Text>
            <Text>
                📦 Eles gostam de caixas porque espaços pequenos e fechados podem proporcionar sensação de segurança.
            </Text>
            <Text>
                🥛 Muitos gatos adultos são intolerantes à lactose, então leite de vaca pode causar problemas digestivos.
            </Text>
            <Text>
                😸 O ronronar nem sempre significa felicidade: gatos também podem ronronar quando estão assustados, estressados ou sentindo desconforto.
            </Text>
            <Text>
                🧭 Os bigodes ajudam na orientação, permitindo perceber espaços estreitos e movimentos do ar ao redor.
            </Text>
            <Text>
                🐈 Gatos conseguem pular várias vezes a própria altura, graças às pernas traseiras muito fortes.
            </Text>
            <Text>
                👀 Eles possuem uma terceira pálpebra, chamada membrana nictitante, que ajuda a proteger os olhos.
            </Text>
            <Text>
                ❤️ O coração de um gato bate bem mais rápido que o nosso, geralmente mais de 100 vezes por minuto.
            </Text>
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