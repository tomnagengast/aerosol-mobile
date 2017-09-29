import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';
import {
     MapView,
     Constants,
     Location,
     Permissions
 } from 'expo';

 const VIEWPORT = {
    latitudeDelta: 0.02082037845414675,
    longitudeDelta: 0.014850174261297866,
 }

export default class App extends React.Component {
    state = {
        location: null,
        errorMessage: null,
        mapLoaded: false,
        region: {
            latitude: 35.64792644943221,
            latitudeDelta: 0.02082037845414675,
            longitude: -120.6210793307587,
            longitudeDelta: 0.014850174261297866,
        }
    }

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'AndroidError: Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    componentDidMount() {
        console.log({Platform});
        this.setState({mapLoaded: true});
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    };

    onRegionChangeComplete = (region) => {
        this.setState({ region });
    }

    render() {
        console.log(this.state.region);

        let text = 'Waiting..';

        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);

            const { longitude, latitude } = this.state.location.coords

            const region = { ...VIEWPORT , longitude, latitude }

            this.setState({ region });

            console.log('text: ', text);
            console.log('state.region: ', this.state.region);
        }

        if (!this.state.mapLoaded) {
            return (
                <View style={{flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                    mapType='satellite'
                />
                <View style={{ flex: 1 }}>
                    <Text>Seems to be working alright.</Text>
                </View>
            </View>
        );
    }
}
