import React from 'react';
import ArticleContainer from './js/components/Articles/ArticleContainer';
import TitleBar from './js/components/Header/TitleBar';

class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar />
                <ArticleContainer />
            </div>
        );
    }
}

export default App;
