import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const initialState = {
  gameTime: 5,
  mistakes: 3
};

const init = () => {
  ReactDOM.render(<App time={initialState.gameTime} mistakes={initialState.mistakes}/>, document.querySelector(`#root`));
};

init();
