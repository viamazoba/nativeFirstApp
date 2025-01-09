import { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';


export const CounterScreen = () => {

    const [value, setValue] = useState<number>(0);

    return (
        <View style={style.container}>
            <Text style={style.title}>{value}</Text>
            <Pressable onPress={() => setValue(prev => prev + 1)}
                onLongPress={() => setValue(0)}
                style={({ pressed }) => [
                    style.button,
                    pressed && style.pressedButton,
                ]}
            >
                <Text style={style.textButton}>Incrementar</Text>
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
        backgroundColor: Platform.OS === 'android' ? '#e63946' : '#778da9',
        borderRadius: 5,
        padding: 10,
    },
    pressedButton: {
        backgroundColor: Platform.OS === 'android' ? '#c1121f' : '#415a77',
    },
    textButton: {
        fontSize: 16,
        color: 'white',
    },
});
