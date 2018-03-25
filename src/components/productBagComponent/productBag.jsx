import React, { Component } from 'react';
import BagItem from './bagItemComponent/BagItem';

class ProductBag extends Component {
  constructor(props){
    super(props)
    this.total;
    this.installments;

    this.bag = [
      {
        "id": 6,
        "sku": 6090484789343891,
        "title": "Calção Nike Corinthians",
        "description": "Goleiro 13/14",
        "availableSizes": ["GG", "GGG"],
        "style": "Branco",
        "price": 49.9,
        "installments": 5,
        "currencyId": "BRL",
        "currencyFormat": "R$",
        "isFreeShipping": true,
        "size": "M",
        "quantity": 2
      },
      {
        "id": 1,
        "sku": 18644119330491312,
        "title": "Camisa Nike Corinthians II",
        "description": "14/15 s/nº",
        "availableSizes": ["S", "G", "GG", "GGG"],
        "style": "Preta com listras brancas",
        "price": 229.9,
        "installments": 9,
        "currencyId": "BRL",
        "currencyFormat": "R$",
        "isFreeShipping": true,
        "size": "P",
        "quantity": 1
      },
      {
        "id": 0,
        "sku": 8552515751438644,
        "title": "Camisa Nike Corinthians I",
        "description": "14/15 s/nº",
        "availableSizes": ["S", "G", "GG", "GGG"],
        "style": "Branco com listras pretas",
        "price": 229.9,
        "installments": 9,
        "currencyId": "BRL",
        "currencyFormat": "R$",
        "isFreeShipping": true,
        "size": "G",
        "quantity": 1
      }
    ];
  }

  buyProducts(){
    alert("Sua compra foi efetuada com sucesso!");
  }

  getValueFormated(bag){
    let value = 0;
    bag.forEach(element => {
      value+=element.price;
    });
    this.total = { 
      price: Math.floor(value),
      decimalPart: (value - Math.floor(value)).toFixed(2) * 100 
    };
  }

  getInstallmentFormated(bag){
    let arrInstallments = bag.map(a => a.installments);
    console.log(arrInstallments);
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

  render() {
    return (
      <div className="productBag">
        <div className="title">
          <img src='/assets/img/bag-icon.png'></img>
          <span>sacola</span>
          <div className="productCount"><span>{this.bag.length}</span></div>
        </div>

        {this.bag.map(element => <BagItem content={element} />)} 

        <div className="totalizer">
          <span>subtotal</span>
          <div className="right">
          {this.getValueFormated(this.bag)}
            <span className="value">R$ <b>{this.total.price}</b>,{this.total.decimalPart}</span>
            {this.getInstallmentFormated(this.bag)}{this.hasInstallment()}
          </div>
        </div>

        <div className="buyButton">
          <button onClick={this.buyProducts}>comprar</button>
        </div>
      </div>
    )
  }
}


export default ProductBag;