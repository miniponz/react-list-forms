import React from 'react';
import Good from './Good';
import Bad from './Bad';
import ErrorBoundary from './ErrorBoundary';



export default function App() {
  return (
    <>
      <ErrorBoundary>
        <Bad />
      </ErrorBoundary>
      <Good />
    </>
  );
}

