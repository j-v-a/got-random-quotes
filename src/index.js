import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/main.scss';

import QuoteComponent from './components/QuoteComponent';

const title = 'GOT Random quote Machine';

ReactDOM.render(<QuoteComponent />, document.getElementById('app'));

module.hot.accept();
