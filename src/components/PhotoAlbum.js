import React from 'react';
import Photos from './Photos';
import PropTypes from 'prop-types';

function PhotoAlbum({ title, photos }) {
  return (
    <div>
      <h2>{title}</h2>
      <Photos photos={photos}/>
    </div>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
