import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './helpers/registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import PostIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import ReduxPromise from 'redux-promise';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
        <div>
            <Switch>
                <Route path="/posts/new" component={PostsNew} />
                <Route path="/" component={PostIndex} />
            </Switch>
        </div>
    </Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();