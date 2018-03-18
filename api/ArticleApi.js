import {get} from './http';
import {
    GET_ARTICLES_LIST,
    GET_ARTICLES_LIST_ERROR,
    GET_ARTICLE,
    GET_ARTICLE_ERROR
} from '../actions/ArticleActions';

export function getArticleList() {
    return function(dispatch) {
        get('/posts')
            .then((response)=> {
                dispatch({type: GET_ARTICLES_LIST, data: response.data});
            }, (response)=> {
                dispatch({type: GET_ARTICLES_LIST_ERROR, data: response.data});
            });
    }
}

export function getSingleArticle(id) {
    return function(dispatch) {
        get('/posts/'+id)
            .then((response)=> {
                dispatch({type: GET_ARTICLE, data: response.data});
            }, (response)=> {
                dispatch({type: GET_ARTICLE_ERROR, data: response.data});
            });
    }
}