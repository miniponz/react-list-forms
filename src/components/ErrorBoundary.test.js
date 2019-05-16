import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

describe('colors list', () => {
  it('renders color list', () => {
    const wrapper = shallow(<ErrorBoundary/>);
    expect(wrapper).toMatchSnapshot();
  });
});
