import React, { Component } from 'react';
import BagItem from './bagItemComponent/BagItem';
import BagController, { getBag } from './../common/BagController';

class ProductBag extends Component {
  constructor(props){
    super(props)
    this.total;
    this.installments;
    
    this.getBag = getBag.bind(this);
  }
  
  buyProducts(){
    localStorage.removeItem(this.props.bagKey);
    localStorage.removeItem('bagKey');
    this.setState({updateBag:true});
    alert("Sua compra foi efetuada com sucesso!");
  }

  getValueFormated(){
    let value = 0;
    this.bag.itens.forEach(element => {
      value+=element.price;
    });
    this.total = { 
      price: Math.floor(value),
      decimalPart: (value - Math.floor(value)).toFixed(2) * 100 
    };
  }

  getInstallmentFormated(){
    let arrInstallments = this.bag.itens.map(a => a.installments);
    let number = Math.min.apply(Math, arrInstallments);
    this.installments = {
      number: number,
      value: (this.total.price / number).toFixed(2)
    };
  }

  hasInstallment(){
    if(this.installments.number>0){
      return <span className="installments">ou em até {this.installments.number} x R$ {this.installments.value.replace('.', ',')}</span>
    }
    return;
  }

  shouldComponentUpdate(nextProps) {
    return true;
  }

  render() {
    this.bag = this.getBag();
    
    return (
      <div className="productBag">
        <div className="title">
          <img src='/assets/img/bag-icon.png'></img>
          <span>sacola</span>
          <div className="productCount"><span>{this.bag.itens.length}</span></div>
        </div>
        
        {this.bag.itens.map(element => <BagItem 
            father={this} 
            availableSizes={element.availableSizes} 
            currencyFormat={element.currencyFormat} 
            decimalPart={element.decimalPart} 
            description={element.description} 
            id={element.id} 
            image={element.image} 
            installments={element.installments} 
            intPrice={element.intPrice} 
            isFreeShipping={element.isFreeShipping} 
            price={element.price} 
            quantity={element.quantity} 
            size={element.size} 
            sku={element.sku} 
            style={element.style} 
            title={element.title} 
          />
        )} 

        {this.bag.itens.length == 0 &&
          <div className="emptyBag">
            Sua sacola está vazia
          </div>
        }

        {this.bag.itens.length > 0 &&
          <div className="totalizer">
            <span>subtotal</span>
            <div className="right">
            {this.getValueFormated()}
              <span className="value">R$ <b>{this.total.price}</b>,{this.total.decimalPart}</span>
              {this.getInstallmentFormated()}{this.hasInstallment()}
            </div>
          </div>
        }

        {this.bag.itens.length > 0 &&
          <div className="buyButton">
            <button onClick={this.buyProducts.bind(this)}>comprar</button>
          </div>
        }
      </div>
    )
  }
}

export default ProductBag;