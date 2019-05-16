import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function App() {
  const stories = {
    cool: 'this is a cool story',
    more: 'here are some more cool stories',
    not: 'this is not a cool story',
    bad: 'this is definitely a bad story'
  };

  const [selected, updateSelected] = useState('cool');

  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <Sidebar select={updateSelected} >
        <a onClick={() => updateSelected('cool')} href="#">cool story</a>
        <a onClick={() => updateSelected('more')}href="#">more cool stories</a>
        <a onClick={() => updateSelected('not')}href="#">not cool story</a>
        <a onClick={() => updateSelected('bad')}href="#">bad story</a>
      </Sidebar>
      <p>{stories[selected]}</p>
    </section>
  );
}
