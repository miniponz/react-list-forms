import React from 'react';
import { shallow } from 'enzyme';
import Photo  from './Photo';

describe('photo component', () => {
  it('renders photo', () => {
    const wrapper = shallow(<Photo image={'url'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
