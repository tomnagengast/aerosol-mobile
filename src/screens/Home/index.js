/* eslint-disable */
import { Constants } from 'expo';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
// import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import '../../bootstrap';
import PlayerList from './components/PlayerList';


const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: Constants.statusBarHeight,
        width: WINDOW_WIDTH,
    },
    holeImage: {
        width: 40,
        height: 40,
        margin: 10,
        borderRadius: 3,
    },
    hole: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    holesContainer: {
        height: 80,
    },
    holes: {
        height: 80,
        flexDirection: 'row',
    },
    holesHeader: {},
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 64,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#eee',
        width: WINDOW_WIDTH,
        justifyContent: 'space-between',
    },
    score: {
        flex: 1,
    },
};

export class Home extends React.Component {
    navigationOptions = { title: 'HomeScreen' };

    componentDidMount() {
        // console.log({props: this.props});

        this.props.navigation.navigate('AuthScreen')

        this.props.initialize();
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <Text>Home</Text>
                {/*<Icon name="fire" type="material-community" color="#ccc" size={35}/>*/}
                <Text>Logo</Text>
                <Text>Players</Text>
            </View>
        );
    }

    renderHoleThumbnail(hole) {
        return (
            <View key={hole.id} style={styles.hole}>
                <Image
                    style={styles.holeImage}
                    source={{ uri: hole.uri }}
                />
                <Text>{hole.name}</Text>
            </View>
        );
    }

    renderHoles() {
        return (
            <View style={styles.holesContainer}>
                <View
                    horizontal
                    style={styles.holes}>
                    {this.props.round.course.holes.map(hole => this.renderHoleThumbnail(hole))}
                </View>
            </View>
        );
    }

    renderScore() {
        return (
            <View style={styles.score}>
                <Text>Score!!!</Text>
                <Text>Putts</Text>
                <Text>Fairway Hit</Text>
            </View>
        );
    }

    renderPlayer(player) {
        return (
            <View style={styles.score} key={player.id}>
                <Text>{player.name}</Text>
            </View>
        );
    }

    renderPlayers() {
        return (
            <View style={styles.score}>
                {this.props.players.map(player => (
                    this.renderPlayer(player)
                ))}
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                {/*{this.renderHoles()}*/}
                {/*{this.renderScore()}*/}
                {/*{this.renderPlayers()}*/}

                <Text>Current Screen: {this.props.home.currentScreen}</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, actions)(Home);
