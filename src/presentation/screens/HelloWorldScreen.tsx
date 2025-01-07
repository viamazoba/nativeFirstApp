import { StyleSheet, Text, View } from 'react-native';


interface Props {
    name?: string
}

export const HelloWordScreen = ({ name = 'World' }: Props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Hello {name}
            </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#669bbc',
        justifyContent: 'center',
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        color: 'white',
        padding: 20,
    },
});
