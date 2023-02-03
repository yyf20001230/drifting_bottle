import { StyleSheet, Text, View } from 'react-native';

export const LoginButton = ({ loginText }) => {
    return (
        <View style={styles.LoginBotton}>
            <Text>{ loginText }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    LoginBotton: {
        backgroundColor: 'red',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});