import React from 'react';
import PropTypes from 'prop-types';
// dumb component to write simple test

function Button({ onClick, buttonText }) {
  return <button type="button" onClick={onClick}>{buttonText}</button>;
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};
