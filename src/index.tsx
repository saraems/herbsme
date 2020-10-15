import React from 'react';
import ReactDOM from 'react-dom';
import HerbsMe from './HerbsMe';
import * as serviceWorker from './serviceWorker';
// import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import { store } from './store/store';


// WebFont.load({
//   google: {
//     families: ['Montserrat:400,600,700,800', 'Abel:400,600,700,800', 'Comfortaa:400,600,700,800'],
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HerbsMe />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
