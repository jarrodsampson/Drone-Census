import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './Store';
import router from './router';

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>
    , document.getElementById('droneApp'));
registerServiceWorker();
