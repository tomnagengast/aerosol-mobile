import React from 'react';
import {
    Text,
    View,
    Animated,
    PanResponder,
    Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.5 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class Deck extends React.Component {
    constructor(props) {
        super(props);

        const position = new Animated.ValueXY();

        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx }); // , y: gesture.dy
            },
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx >= SWIPE_THRESHOLD) {
                    return this.swipe(SCREEN_WIDTH);
                }

                if (gesture.dx <= -SWIPE_THRESHOLD) {
                    return this.swipe(-SCREEN_WIDTH);
                }

                return this.resetPosition();
            },
        })

        // Sometimes it may be easier to just assign to `this`
        // this.position = position;
        this.state = { panResponder, position };
    }

    swipe(direction) {
        console.log(`moving out ${SCREEN_WIDTH}`);
        Animated.timing(this.state.position, {
            toValue: { x: direction, y: 0 },
            duration: SWIPE_OUT_DURATION,
        }).start(() => this.onSwipeComplete(direction));
    }

    onSwipeComplete(direction) {
        const { onSwipeRight, onSwipeLeft, data } = this.props;
        const item = data[this.state.index]

        direction > 0 ? onSwipeRight(item) : onSwipeLeft(item);
    }

    resetPosition() {
        console.log(`resetting card position`);
        Animated.spring(this.state.position, {
            toValue: { x: 0, y: 0 }
        }).start();
    }

    getCardStyle() {
        const { position } = this.state;

        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', '120deg'],
        });

        return {
            ...position.getLayout(),
            transform: [{ rotate }],
        }
    }

    renderCards() {
        return this.props.data.map((item, index) => {
            if (index === 0) {
                return (
                    <Animated.View
                        key={item.id}
                        style={this.getCardStyle()}
                        {...this.state.panResponder.panHandlers}
                    >
                        {this.props.renderCard(item)}
                    </Animated.View>
                );
            }

            return this.props.renderCard(item);
        });
    }

	render() {
		return (
            <View>
                {this.renderCards()}
            </View>
		);
	}
}

const styles = {
    container: {
    },
	text: {
		fontSize: 20,
		fontWeight: '800',
		color: 'red',
	}
}

export default Deck;
