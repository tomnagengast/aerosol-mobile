import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../src/actions/index';
import axios from 'axios';

import {ROW_MARGIN, COLORS, WINDOW_WIDTH} from '../../src/constants'

class AuthScreen extends React.Component {
    navigationOptions = { title: 'Auth' };

    componentDidMount() {
        this.props.login();
    }

    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }

    onAuthComplete(props) {
        if (props.token) {
            this.props.navigation.navigate('Search');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Auth Screen</Text>
                <TextInput
                    style={styles.textInput}
                    ref={e => this.textField = e}
                    value=''
                    onChangeText={text => this.setState({text})}
                    placeholder="Message"
                >
                </TextInput>
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
        backgroundColor: COLORS.purple,
    },
    textInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        height:          60,
        width:           300,
        color:           'white',
        marginBottom:    ROW_MARGIN,
        borderRadius:    6,
        padding:         20,
        alignSelf:       'center'
    },
}

function mapStateToProps({ auth }) {
    return { ...auth };
}

export default connect(mapStateToProps, actions)(AuthScreen);
