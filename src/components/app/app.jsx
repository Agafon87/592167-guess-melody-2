import React from 'react';
import Welcome from '../welcome/welcome.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {time, mistakes} = props;
  return <Welcome time={ time } mistakes={ mistakes }/>;
};

App.propTypes = {
  time: PropTypes.number,
  mistakes: PropTypes.number
};

export default App;
