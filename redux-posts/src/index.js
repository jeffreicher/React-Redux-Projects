import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './helpers/registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducers from './reducers';
import PostIndex from './components/posts_index';
// import ReduxPromise from 'redux-promise';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
        <div>
            <Route path="/" component={PostIndex} />
        </div>
    </Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();