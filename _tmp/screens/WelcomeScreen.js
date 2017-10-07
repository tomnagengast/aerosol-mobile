/* eslint-disable no-unused-vars, class-methods-use-this */

import React from 'react';
import { Text, View } from 'react-native';

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default class WelcomeScreen extends React.Component {
    navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.name,
    });

    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome Screen</Text>
            </View>
        );
    }
}
