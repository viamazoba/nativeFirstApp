import { Platform, Pressable, StyleSheet, Text } from 'react-native';

// (event: GestureResponderEvent) => void)
interface PrimaryButtonProps {
    label: string
    onPressed?: () => void
    onLongPressed?: () => void
}

export const PrimaryButton = ({
    label,
    onPressed,
    onLongPressed,
}: PrimaryButtonProps) => {

    return (
        <Pressable
            style={style.button}
            onPress={onPressed}
            onLongPress={onLongPressed}
        >
            <Text
                style={style.textButton}
            >{label}</Text>
        </Pressable>
    );
};

const style = StyleSheet.create({
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
