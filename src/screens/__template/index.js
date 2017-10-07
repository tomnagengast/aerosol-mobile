import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import '../../bootstrap';

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: global.statusBarHeight,
        width: WINDOW_WIDTH,
    },
};

/**
 * Hook it up:
 *
 */
export class TemplateComponent extends React.Component {
    navigationOptions = { title: TemplateComponent.name };

    componentDidMount() {
        // this.props.action();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>`${this.props.navigationOptions.title} Screen`</Text>
                <Button
                    title={`${this.props.navigationOptions.title} Button`}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, actions)(TemplateComponent);
