import React, { Component } from 'react';
import ShowCase from './showCaseComponent/ShowCase';
import ProductBag from './productBagComponent/ProductBag';

class HomePage extends Component {
  constructor(props){
    super(props)
    this._bag= ProductBag;
    this._showCase= ShowCase;
  }

  componentDidMount() {
    this._showCase.setBag(this._bag);
}

  render() {
    return (
      <div>
        <ProductBag ref={(child) => { this._bag = child; }} />
        <ShowCase ref={(child) => { this._showCase = child; }} />
      </div>
    )
  }
}
export default HomePage;