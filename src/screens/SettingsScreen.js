import React from 'react';
import { Text, View } from 'react-native';

export default class SettingsScreen extends React.Component {
    navigationOptions = {
        title: 'Settings'
    };

    render() {
        return (
            <View>
                <Text>Settings Screen</Text>
            </View>
        );
    }
}
