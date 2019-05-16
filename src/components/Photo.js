import React from 'react';
import PropTypes from 'prop-types';

function Photo({ caption, url }) {
  return (
    <div>
      <img src={url}></img>
      <p>{caption}</p>
    </div>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};

export default Photo;
