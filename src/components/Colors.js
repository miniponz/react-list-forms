
import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colors }) {

  const colorList = colors.map(({ name, hex, rgb }) => {
    <li>
      <Color key={`${name}, ${hex}, ${rgb}`} name={name} hex={hex} rgb={rgb} />
    </li>;
  });

  return (
    <ul>
      {colorList}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;


