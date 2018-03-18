import {
    START_LOADING,
    STOP_LOADING
} from '../actions/LoadingActions';

const initialState = {
    START_LOADING: false,
    STOP_LOADING: true
};

const handler = {
    [START_LOADING]: (state, action)=> ({
        START_LOADING: true,
        STOP_LOADING: false
    }),
    [STOP_LOADING]: (state, action)=> ({
        START_LOADING: false,
        STOP_LOADING: true
    })
};

export default function loadingReducer(state = initialState, action) {
    let handle = handler[action.type];
    if(!handle) {
        return state;
    }
    return handle(state, action);
};