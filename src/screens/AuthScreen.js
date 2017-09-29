import React from 'react';
import { Text, View } from 'react-native';

export default class AuthScreen extends React.Component {
    navigationOptions = { title: 'Auth' };

    render() {
        return (
            <View style={styles.container}>
                <Text>Auth Screen</Text>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'red',
    }
}
