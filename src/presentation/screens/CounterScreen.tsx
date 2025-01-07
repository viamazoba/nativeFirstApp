import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';


export const CounterScreen = () => {

    const [value, setValue] = useState<number>(0);

    return (
        <View style={style.container}>
            <Text style={style.title}>{value}</Text>
            <Pressable onPress={() => setValue(prev => prev + 1)}
                onLongPress={() => setValue(0)}
                style={style.button}
            >
                <Text style={style.textButton}>+1</Text>
            </Pressable>
        </View>
    );
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300',
    },
    button: {
        cursor: 'pointer',
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 10,
    },
    textButton: {
        fontSize: 16,
        color: 'white',
    },
});
