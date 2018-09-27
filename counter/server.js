import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers';
import App from './containers/App';
import { renderToString } from 'react-dom/server';
import qs from 'qs';
import { fetchCounter } from './api/counter';

const app = Express();
const port = 3000;

// 每当收到请求时都会触发
app.use(handleRender);

// 接下来会补充这部分代码
function handleRender(req, res) {
  fetchCounter(apiResult => {
    const param = qs.parse(req.query);
    const counter = parseInt(param.counter) || apiResult || 0;

    let initialState = { counter };

    const store = createStore(counterApp, initialState);

    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const finalState = store.getState();

    res.send(renderFullPage(html, finalState));
  });
}

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
    `;
}

app.listen(port);