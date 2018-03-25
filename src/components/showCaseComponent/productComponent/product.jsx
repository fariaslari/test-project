import React, { Component } from 'react';

class Product extends Component {
  constructor(props){
    super(props);
    this.content = formatPrice(this.props.content);
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
      <div className="product">
        <div className="addToCart">
          <div className="sizeSelector">
          {this.content.availableSizes.map((size) => <div className="size">{size}</div>)}
          </div>
        </div>
        <div className="content">
          <div className="productImg">
            <img src="https://static.netshoes.com.br/produtos/camisa-corinthians-ii-1718-sn-torcedor-nike-masculina/26/D12-6982-026/D12-6982-026_detalhe1.jpg?resize=326:*" />
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


function formatPrice(obj){
  obj.intPrice = Math.floor(obj.price);
  obj.decimalPart = (obj.price - Math.floor(obj.price)).toFixed(2) * 100;
  return obj;
}

export default Product;