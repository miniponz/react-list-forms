import React from 'react';
import PropTypes from 'prop-types';

function hexToRGB(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5), 16);
  return (`${r},${g},${b}`);
}

function Color({ name, hex, rgb }) {
  const dlStyle = {
    color: hex
  };
  return (
    <div style={dlStyle}>
      {name && <><dt>Name</dt>
      <dd>{name}</dd> </>}

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>{rgb ? rgb : hexToRGB(hex)}</dd>
    </div>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.string
};


export default Color;
