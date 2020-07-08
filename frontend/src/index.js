import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import storeReducer from './redux/store';

//Implementacion de react-redux
ReactDOM.render(<Provider store={storeReducer}> <App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
