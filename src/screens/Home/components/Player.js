import React from 'react';
import { Text, View } from 'react-native';

const styles = {
    player: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    playerName: {
        // color: '#eee',
        fontSize: 32,
    },
};

export default class Player extends React.Component {
    render() {
        return (
            <View style={styles.player}>
                <Text style={styles.playerName}>{this.props.player.name}</Text>
            </View>
        );
    }
}
