import React from 'react';
import { shallow } from 'enzyme';
import TextFormatter from './TextFormatter';

describe('text formatter', () => {
  it('renders text', () => {
    const wrapper = shallow(<TextFormatter />);
    expect(wrapper).toMatchSnapshot();
  });
});
