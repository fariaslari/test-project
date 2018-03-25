import React, { Component } from 'react';

class BagItem extends Component {
  constructor(props){
    super(props)
    this.state = {selected: false};
    this.content = formatPrice(this.props.content);
  }

  onMouseOver(){
    this.setState({selected: true})
  }

  onMouseOut(){
    this.setState({selected: false})
  }

  render() {
    return (
        <div className={"product" + (this.state.selected ? " strike" : '')}>
        <div className="delete" onMouseOut={this.onMouseOut.bind(this)} onMouseOver={this.onMouseOver.bind(this)}>X</div>
          <div className="pic">
            <img src="https://static.netshoes.com.br/produtos/camisa-corinthians-ii-1718-sn-torcedor-nike-masculina/26/D12-6982-026/D12-6982-026_detalhe1.jpg?resize=326:*"></img>
          </div>
          <div className="descp">
            <span className="name">
              {this.content.title}
            </span>
            <div className="info">
              <span className="line">
              {this.content.size} | {this.content.style}
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

function formatPrice(obj){
  obj.intPrice = Math.floor(obj.price);
  obj.decimalPart = (obj.price - Math.floor(obj.price)).toFixed(2) * 100;
  return obj;
}

export default BagItem;


//localStorage.getItem('chave');
//localStorage.setItem('chave', {teste:"teste"});