import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';

const buttonClick = () => {
  return;
};

const App = (props) => {
  const {time, mistakes} = props;
  return <WelcomeScreen time={ time } mistakes={ mistakes } onClick={ buttonClick }/>;
};

App.propTypes = {
  time: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired
};

export default App;
