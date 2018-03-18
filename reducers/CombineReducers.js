import { combineReducers } from 'redux'
import LoadingReducer from './LoadingReducer';
import ArticlesReducer from './ArticlesReducer';

export default combineReducers({
    LoadingReducer,
    ArticlesReducer
});