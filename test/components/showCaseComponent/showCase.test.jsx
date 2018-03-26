import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ShowCase from './../../../src/components/showCaseComponent/ShowCase';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('ShowCase', () => {
  it('should render correctly', () => {

    const output = shallow(
        <ShowCase />
    );
    
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});