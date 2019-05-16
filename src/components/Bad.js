import React from 'react';

export default function Bad() {
  const error = new Error('this is an error');
  return (
    <h1>{error}</h1>
  );
}
