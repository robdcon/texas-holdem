import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Player.styles';

const Player = (props) => (
  <div className="PlayerWrapper">
    Test content
  </div>
);

Player.propTypes = {
  // bla: PropTypes.string,
  id: PropTypes.string,
  username: PropTypes.string
};

Player.defaultProps = {
  // bla: 'test',
};

export default Player;
