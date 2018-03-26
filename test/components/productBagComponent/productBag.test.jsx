import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ProductBag from './../../../src/components/productBagComponent/ProductBag';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('ProductBag', () => {
  it('should render correctly', () => {

    const output = shallow(
        <ProductBag />
    );
    
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});