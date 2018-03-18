import React from 'react';
import {object} from 'prop-types';
import { connect } from 'react-redux';
import { getArticleList, getSingleArticle } from './../../../api/ArticleApi';
import ArticleCard from './ArticleCard';
import ArticlePaper from './ArticlePaper';

class ArticleContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            articleData: undefined
        };
    }

    componentDidMount() {
        /*request for article list*/
        this.props.dispatch(getArticleList());
    }

    componentWillReceiveProps(nextProps) {
        let articleData = nextProps.articleData;
        if(articleData) {
            this.setState({
                articleData
            });
        }
    }

    getSingleArticleDetail(articleId) {
        this.props.dispatch(getSingleArticle(articleId));
    }

    render() {
        const articleList = this.props.articleList;
        if(this.state.articleData) {
            return <ArticlePaper data={this.state.articleData} />;
        }
        else if(articleList) {
            return <div>
                {
                    articleList.map((article, index)=> {
                        return <ArticleCard
                            key={index}
                            articleDetails={article}
                            onButtonClick={this.getSingleArticleDetail.bind(this)}
                        />;
                    })
                }
            </div>;
        }
        return null;
    }
}

export default connect((state)=> {
    const reducer = state.ArticlesReducer;
    return {
        articleList: reducer.articleList,
        articleData: reducer.articleData
    };
})(ArticleContainer);
