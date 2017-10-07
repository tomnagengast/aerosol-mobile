import { ACTION_NAME } from './actions';

const INITIAL_STATE = {
    template: 'Initial template data.',
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
    case ACTION_NAME:
        return { template: action.payload.template };
    default:
        return state;
    }
}
