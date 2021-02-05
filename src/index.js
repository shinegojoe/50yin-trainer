import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { ThemeProvider } from '@material-ui/core/styles';
import { createStore, applyMiddleware } from "redux"
import rootReducer from "Src/reducers/rootReducer.js";
import { Provider } from "react-redux";


const store = createStore(rootReducer)


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#115A3F',
    },
    secondary: {
      main: green[500],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
