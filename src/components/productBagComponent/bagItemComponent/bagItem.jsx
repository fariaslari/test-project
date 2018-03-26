import React, { Component } from 'react';
import Utils, { formatPrice } from './../../common/Utils';
import BagController, { removeFromBag } from './../../common/BagController';

class BagItem extends Component {
  constructor(props){
    super(props)
    
    this.state = {selected: false};
    this.formatPrice = formatPrice.bind(this);
    this.props = this.formatPrice(this.props);

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
        <div className="delete" onClick={()=>this.removeFromBag(this.props.father, this.props)} onMouseOut={this.onMouseOut.bind(this)} onMouseOver={this.onMouseOver.bind(this)}>X</div>
          <div className="pic">
            <img src={this.props.image}></img>
          </div>
          <div className="descp">
            <span className="name">
              {this.props.title}
            </span>
            <div className="info">
              <span className="line">
              {this.props.size} {this.props.style != "" ? " | "+ this.props.style : ""}
              </span>
              <span className="line">
                Quantidade: {this.props.quantity}
              </span>
            </div>
          </div>
          <div className="price">
          {this.props.currencyFormat} <b>{this.props.intPrice}</b>,{this.props.decimalPart}
          </div>
        </div>
    )
  }
}

export default BagItem;

