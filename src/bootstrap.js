/* eslint-disable no-unused-vars */
// noinspection NpmUsedModulesInstalled
import { Dimensions } from 'react-native';
import { Constants } from 'expo';

const purple = '#34314c';
const blue = 'rgb(133, 187, 220)';
const yellow = '#ffc952';
const orange = '#ff7473';

const green = {
    lightest: '#E6FABE',
    light: '#D3F492',
    normal: '#C2EE6B',
    dark: '#83B322',
    darkest: '#A1D044',
};

global.COLORS = {
    purple, blue, yellow, orange, green,
};

global.WINDOW_WIDTH = Dimensions.get('window').width;

global.ROW_MARGIN = 20;

global.statusBarHeight = Constants.statusBarHeight;

// MessageData API is not intended for large images and so we need to restrict the size
global.MAX_IMAGE_SIZE = 300;
global.API_ENDPOINT = process.env.NODE_ENV === 'production'
    ? 'https://crowddit.com/api/'
    : 'http://aerosolgolf.com.dev/api/';
