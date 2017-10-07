import { INIT_HOME } from './actions';

const INITIAL_STATE = {
    currentScreen: 'initial home data',
};

export default function (state = INITIAL_STATE, action) {
    console.log({ homeAction: action.type });

    switch (action.type) {
    case INIT_HOME:
        console.log('init Home');
        return { currentScreen: action.payload.currentScreen };
    default:
        return state;
    }
}
