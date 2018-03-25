import React, { Component } from 'react';
import ShowCase from './showCaseComponent/ShowCase';
import ProductBag from './productBagComponent/ProductBag';

class HomePage extends Component {
  render() {
    return (
      <div>
          <ProductBag />
          <ShowCase />
      </div>
    )
  }
}
export default HomePage;