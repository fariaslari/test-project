import React, { Component } from 'react';
import Utils, { formatPrice } from './../../common/Utils';
import BagController, { addToBag } from './../../common/BagController';
import ProductBag from './../../productBagComponent/ProductBag';

class Product extends Component {
  constructor(props){
    super(props)
    this.state = {visible: false};
    this.formatPrice = formatPrice.bind(this);
    this.content = this.formatPrice(this.props.content);

    this.addToBag = addToBag.bind(this);
  }

  onMouseOver(){
    this.setState({visible: true})
  }

  onMouseOut(){
    this.setState({visible: false})
  }

  getInstallmentFormated(value){
    return value.toFixed(2).replace('.',',');
  }

  hasInstallment(){
    if(this.content.installments){
      return <div className="installments">ou {this.content.installments} X R$ {this.getInstallmentFormated(this.content.price/this.content.installments)}</div>
    }
    return <div className="installments"></div>;
  }

  render() {
    return (
      <div className="product" onMouseOut={this.onMouseOut.bind(this)} onMouseOver={this.onMouseOver.bind(this)}>
        <div className={"addToBag" + (this.state.visible ? " visible" : '')}>
          <div className="sizeSelector">
            {this.content.availableSizes.map((size) => <div className="size" onClick={()=>this.addToBag(this.props.bag, this.content, size)}>{size}</div>)}
          </div>
        </div>
        <div className={"content" + (this.state.visible ? " focusOff" : '')}>
          <div className="productImg">
            <img src={this.content.image} />
          </div>

          <div className="productDescp">
            <div className="name">{this.content.title}</div>
            <div className="info">
              <div className="price">{this.content.currencyFormat} <span className="main">{this.content.intPrice}</span>,{this.content.decimalPart}</div>
              {this.hasInstallment()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Product;