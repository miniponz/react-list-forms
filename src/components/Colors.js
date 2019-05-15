
import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colors }) {

  const colorList = colors.map(({ name, hex }) => (
    <li key={name}>
      <Color  name={name} hex={hex}/>
    </li>
  ));


  return (
    <>
    <p>Here is a List of Colors</p>
    <ul>
      {colorList}
    </ul>
    </>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;


