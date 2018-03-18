import {
    GET_ARTICLES_LIST,
    GET_ARTICLES_LIST_ERROR,
    GET_ARTICLE,
    GET_ARTICLE_ERROR
} from '../actions/ArticleActions';

const initialState = {
    articleList: undefined,
    articleListError: undefined,
    articleData: undefined,
    articleError: undefined
};

const handler = {
    [GET_ARTICLES_LIST]: (state, actions) => ({
        articleList: actions.data,
        articleListError: undefined
    }),
    [GET_ARTICLES_LIST_ERROR]: (state, actions) => ({
        articleList: undefined,
        articleListError: actions.response.data
    }),
    [GET_ARTICLE]: (state, actions) => ({
        articleData: actions.data,
        articleError: undefined
    }),
    [GET_ARTICLE_ERROR]: (state, actions) => ({
        articleData: undefined,
        articleError: actions.response.data
    })
};

export default function articleReducer(state = initialState, action) {
    let handle = handler[action.type];
    if(!handle) {
        return state;
    }
    return handle(state, action);
};