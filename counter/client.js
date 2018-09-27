import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import counterApp from './reducers';

// 通过服务端注入的全局变量得到初始 state
const initialState = window.__INITIAL_STATE__;

// 使用初始 state 创建 Redux store
const store = createStore(counterApp, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);