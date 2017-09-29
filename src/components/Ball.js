import React from 'react';
import { Text, View, Animated } from 'react-native';

export default class Ball extends React.Component {
	componentWillMount() {
		// Where is the item right now?
		this.position = new Animated.ValueXY(0, 0);
		Animated.spring(this.position, {
			//  Where is the element moving to?
			toValue: { x: 300, y: 500 }
		}).start();
	}

	render() {
		return (
			// Which elements are we moving?
			<Animated.View style={this.position.getLayout()}>
				<View style={styles.ball} />
				<Text style={styles.text}>Whoa!</Text>
			</Animated.View>
		);
	}
}

const styles = {
	ball: {
		height: 60,
		width: 60,
		borderRadius: 30,
		borderWidth: 30,
		borderColor: 'black',
	},
	text: {
		fontSize: 20,
		fontWeight: '800',
		color: 'red',
	}
}
