import React from 'react';
import { Text, View, TextInput } from 'react-native';

import {ROW_MARGIN, COLORS, WINDOW_WIDTH} from '../constants'

export default class AuthScreen extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            messages:   [],
            reachable:  false,
            loading:    false,
            text:       '',
            fileAPI:    true,
            pings:      0
        }
    }

    navigationOptions = { title: 'Auth' };

    render() {
        return (
            <View style={styles.container}>
                <Text>Auth Screen</Text>
                <TextInput
                    style={styles.textInput}
                    ref={e => this.textField = e}
                    value={this.state.text}
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
