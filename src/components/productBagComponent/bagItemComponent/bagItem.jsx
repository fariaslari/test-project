import React, { Component } from 'react';
import Utils, { formatPrice } from './../../common/Utils';
import BagController, { removeFromBag } from './../../common/BagController';

class BagItem extends Component {
  constructor(props){
    super(props)
    this.state = {selected: false};
    this.formatPrice = formatPrice.bind(this);
    this.content = this.formatPrice(this.props.content);
    
    this.removeFromBag = removeFromBag.bind(this);
  }

  onMouseOver(){
    this.setState({selected: true})
  }

  onMouseOut(){
    this.setState({selected: false})
  }


  getBag(){
    let bag = localStorage.getItem(this.bagKey);
    if(!bag || bag == ""){
        bag = {
          key: this.bagKey,
          itens: []
        };
        return bag;
    }
    return JSON.parse(bag);
  }

  render() {
    return (
        <div className={"product" + (this.state.selected ? " strike" : '')}>
        <div className="delete" onClick={()=>this.removeFromBag(this.content)} onMouseOut={this.onMouseOut.bind(this)} onMouseOver={this.onMouseOver.bind(this)}>X</div>
          <div className="pic">
            <img src="https://static.netshoes.com.br/produtos/camisa-corinthians-ii-1718-sn-torcedor-nike-masculina/26/D12-6982-026/D12-6982-026_detalhe1.jpg?resize=326:*"></img>
          </div>
          <div className="descp">
            <span className="name">
              {this.content.title}
            </span>
            <div className="info">
              <span className="line">
              {this.content.size} {this.content.style != "" ? " | "+ this.content.style : ""}
              </span>
              <span className="line">
                Quantidade: {this.content.quantity}
              </span>
            </div>
          </div>
          <div className="price">
          {this.content.currencyFormat} <b>{this.content.intPrice}</b>,{this.content.decimalPart}
          </div>
        </div>
    )
  }
}

export default BagItem;

