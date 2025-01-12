import { StyleSheet, Text, View } from 'react-native';


export const BoxObjectModelScreen = () => {

    return (
        <View style={style.container}>
            {/* <Text style={style.title}>Box Object Model</Text> */}
            <View style={style.greenBox}></View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003566',
    },
    title: {
        fontSize: 30,
        color: 'white',
        borderWidth: 5,
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
    greenBox: {
        height: '30%',
        backgroundColor: '#83c5be',
        margin: 20,
    },
});

