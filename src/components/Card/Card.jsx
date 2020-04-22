import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Card.styles';

const Card = (props) => (
  <div className="CardWrapper">
    <img src={props.src} />
  </div>
);

Card.propTypes = {
  // bla: PropTypes.string,
  suit: PropTypes.string,
  value: PropsTypes.string,
  code: PropTypes.string,
  imgUrl: PropTypes.string
};

Card.defaultProps = {
  // bla: 'test',
};

export default Card;
