import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('colors list', () => {
  it('renders color list', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper).toMatchSnapshot();
  });
});
