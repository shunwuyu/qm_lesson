import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import Counter from './Counter';
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(reduxLogger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({type});
// const doAsyncIncrement = () => {
//   setTimeout(() => {
//     // 因为在UI业务中的异步超出了redux 的范围
//     action('INCREMENT_ASYNC')
//   }, 1000)
// }
function render () {
  ReactDOM.render(
    <Counter 
      value={store.getState()}
      onIncrementAsync={()=>action('INCREMENT_ASYNC')}
      onIncrement={()=>action('INCREMENT')}
      onDecrement={()=>action('DECREMENT')}
      />,
    document.getElementById('root')
  );
}
render();
store.subscribe(render)