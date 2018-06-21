import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './helpers/registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import reducers from './reducers';
// import ReduxPromise from 'redux-promise';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
    render() { return <div>Hello</div> }
}

class Goodbye extends React.Component {
    render() { return <div>Goodbye</div> }
}

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
    </Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();