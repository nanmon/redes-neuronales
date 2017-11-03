import React from 'react';
import ReactDOM from 'react-dom';
import 'bulmaswatch/materia/bulmaswatch.min.css';
import 'font-awesome/css/font-awesome.min.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
