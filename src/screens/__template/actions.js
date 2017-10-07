export const ACTION_NAME = 'action_name';

export const initialize = () => (dispatch) => {
    dispatch({ type: ACTION_NAME, payload: { key: 'value' } });
};
