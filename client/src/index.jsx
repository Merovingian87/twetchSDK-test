import React from 'react';
import ReactDOM from 'react-dom';
import Twetch from '@twetch/sdk';
import App from './components/App';

window.myTwetch = {};
window.twetchOptions = { clientIdentifier: 'e0af7195-ba67-427b-a9d3-a34806d3518b' };
window.myTwetch = new Twetch({options: window.twetchOptions});

ReactDOM.render(<App />, document.getElementById('root'));
