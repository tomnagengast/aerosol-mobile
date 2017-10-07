/* eslint-disable import/prefer-default-export */
// import { INIT_HOME } from '../../types';

export const INIT_HOME = 'init_home';

export const initialize = () => (dispatch) => {
    dispatch({ type: INIT_HOME, payload: { currentScreen: 'Home you fool!' } });
};
