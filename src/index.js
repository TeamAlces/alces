import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import App from './views/app/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
