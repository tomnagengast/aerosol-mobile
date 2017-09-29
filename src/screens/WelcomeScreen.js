import React from 'react';
import { Text, View } from 'react-native';

export default class WelcomeScreen extends React.Component {
    navigationOptions = ({navigation}) => ({
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

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
}
