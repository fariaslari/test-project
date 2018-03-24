import React, { Component } from 'react';
import bagIcon from '../../../dist/img/bag-icon.png';

class ProductBag extends Component {
  render() {
    return (
      <div className="productBag">
        <div>
          <img src={bagIcon}></img>
          <span>sacola</span>
          
        </div>
      </div>
    )
  }
}
export default ProductBag;