import React from 'react';
import PropTypes from 'prop-types';

function Photo({ url }) {
  return (
    <div>
      <img src={url}></img>
    </div>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Photo;
