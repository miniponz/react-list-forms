import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('colors list', () => {
  it('renders color list', () => {
    const wrapper = shallow(<Colors colors={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });   
});
