import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Card, Header, Button, List, ListItem } from 'react-native-elements'
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

// console.log(DeviceInfo.isTablet());

export default class App extends React.Component {
    renderCard(item) {
        return (
            <Card
                key={item.id}
                title={item.text}
                image={{ uri: item.uri }}
            >
                <Text>{item.text}</Text>
                <Button
                    raised
                    icon={{name: 'home', size: 32}}
                    title={`View Card`}
                />
            </Card>
        );
    }

    render() {
        return (
            // <Deck data={DATA} renderCard={this.renderCard} />
            <View style={styles.container}>
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    centerComponent={{ text: 'Scramble!', style: { color: '#fff' } }}
                    outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
                >
                </Header>
                <List>
                    {
                        DATA.map((item, index) => (
                            <ListItem
                                roundAvatar
                                avatar={{uri:item.uri}}
                                key={index}
                                title={item.text}
                            />
                        ))
                    }
                </List>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
