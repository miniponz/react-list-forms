import React from 'react';
import PropTypes from 'prop-types';
import Photo  from './Photo';

function Photos({ photos }) {
  const photoList = photos.map(({ caption, url }) => (
    <Photo key={caption} url={url} caption={caption}/>
  ));

  return (
    <div>
      {photoList}
    </div>
  );
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;
