import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { store } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// // import { ThemeProvider } from 'styled-components';
// import { App } from 'components/App';
// // import { Globalstyles } from 'components/GlobalStyles';
// // import { Provider } from 'react-redux';

// // import { store } from 'redux/store';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <Provider store={store}>
//     {/* <ThemeProvider theme={theme}> */}
//      <React.StrictMode>

//     <App />
//     /* <Globalstyles /> */
//     /* </ThemeProvider> */
//   /* // </Provider> */
//    </React.StrictMode>

// );
