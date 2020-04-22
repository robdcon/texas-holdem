import React from 'react';
import PropTypes from 'prop-types';
import Player from '../Player/Player';
//import { Test } from './Table.styles';

const Table = (props) => (
  <div className="TableWrapper">
    Test content
  </div>
);

Table.propTypes = {
  // bla: PropTypes.string,
  id: PropTypes.string,
  players: Array[Player],
  deckId: PropTypes.string, // Deck ID (https://deckofcardsapi.com/)
  dealer: PropTypes.string, // Player ID
};

Table.defaultProps = {
  // bla: 'test',
};

export default Table;
