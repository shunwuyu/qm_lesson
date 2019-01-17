import React from 'react';
import ReactDOM from 'react-dom';
import ClockContainer from './Clock/index.js';

ReactDOM.render(<ClockContainer time={new Date()} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: 
