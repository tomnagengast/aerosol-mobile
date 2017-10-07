import React from 'react';
import { Text, View } from 'react-native';

export default class SearchScreen extends React.Component {
    navigationOptions = {
        title: 'Search'
    };

    render() {
        return (
            <View>
                <Text>Search Screen</Text>
            </View>
        );
    }
}
