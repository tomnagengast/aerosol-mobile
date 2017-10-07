import React from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../../../actions';
import Player from './Player';

const styles = {
    container: {
        height: 64,
    },
    players: {
    },
};

class PlayerList extends React.Component {
    render() {
        console.log({ props: this.props });
        return (
            <View style={styles.container}>
                <ScrollView horizontal style={styles.players}>
                    {this.props.players.map(player => (
                        <Player key={player.id} player={player}/>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, actions)(PlayerList);
