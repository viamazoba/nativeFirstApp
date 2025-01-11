import { useState } from 'react';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../theme/global.styles';


export const CounterM3Screen = () => {

    const [value, setValue] = useState<number>(0);
    return (
        <View style={globalStyles.centerContainer}>
            <Text style={globalStyles.title}>{value}</Text>
            <FAB
                style={globalStyles.fab}
                onPress={() => setValue(prev => prev + 1)}
                icon="add"
            />
        </View>
    );
};
