import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components';
import { Button } from 'react-native-paper';


export const CounterScreen = () => {

    const [value, setValue] = useState<number>(0);

    return (
        <View style={style.container}>
            <Text style={style.title}>{value}</Text>
            {/* <PrimaryButton
                label="Incrementar"
                onPressed={() => setValue(prev => prev + 1)}
                onLongPressed={() => setValue(0)}
            /> */}
            <Button
                onPress={() => setValue(prev => prev + 1)}
                onLongPress={() => setValue(0)}
                mode="contained"
            >
                Incrementar
            </Button>
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
});
