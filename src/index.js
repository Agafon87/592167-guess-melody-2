import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import Questions from './mocks/questions.js';

const initialState = {
  gameTime: 5,
  mistakes: 3
};

const init = (questionsGame) => {
  ReactDOM.render(<App time={initialState.gameTime} mistakes={initialState.mistakes} questionsGame={questionsGame}/>, document.querySelector(`#root`));
};

init(Questions);
