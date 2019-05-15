import React from 'react';
import Colors from './Colors';
import Header from './Header';
import Footer from './Footer';

const colors = [
  { name: 'Black', hex:	'#000000',	rgb: '0,0,0' },
  { name: 'White',	hex: '#FFFFFF', rgb:	'255,255,255' },
  { name: 'Red', hex:	'#FF0000', rgb:	'255,0,0' },
  { name:	'Lime', hex:	'#00FF00', rgb:	'0,255,0' },
  { name: 'Blue', hex:	'#0000FF', rgb:	'0,0,255' },
  { name: 'Yellow', hex:	'#FFFF00',	rgb: '255,255,0' },
  { name: 'Cyan / Aqua', hex:	'#00FFFF', rgb:	'0,255,255' },
  { name: 'Magenta / Fuchsia', hex:	'#FF00FF', rgb:	'255,0,255' },
  { name: 'Silver', hex:	'#C0C0C0', rgb:	'192,192,192' },
  { name: 'Gray',	hex: '#808080', rgb:	'128,128,128' },
  { name: 'Maroon', hex:	'#800000', rgb:	'128,0,0' },
  { name: 'Olive', hex:	'#808000', rgb:	'128,128,0' },
  { name: 'Green', hex: '#008000', rgb:	'0,128,0' },
  { name: 'Purple', hex:	'#800080', rgb:	'128,0,128' },
  { name: 'Teal',	hex: '#008080', rgb:'0,128,128' },
  { name:	'Navy', hex:	'#000080', rgb:	'0,0,128' }
];
const title = 'this is a title';

export default function App() {
  return (
    <>
      <Header title={title}/>
      <Colors colors={colors}/>
      <Footer />
    </>
  );
}

