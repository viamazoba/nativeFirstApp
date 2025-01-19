import { StyleSheet, View } from 'react-native';


export const HomeworkScreen = () => {

    return (
        <View style={styles.constainer}>
            <View style={[styles.box, styles.purpleBox]} />
            <View style={[styles.box, styles.orangeBox]} />
            <View style={[styles.box, styles.blueBox]} />
        </View>
    );
};

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#28425B',
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
    },
    orangeBox: {
        position: 'relative',
        top: 50,
        backgroundColor: '#F0A23B',
    },
    blueBox: {
        backgroundColor: '#28C4D9',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
    },
});
