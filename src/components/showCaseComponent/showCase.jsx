import React, { Component } from 'react';
import Product from './productComponent/Product';
import ServerController, { retrieveProducts } from './../common/ServerController';

class ShowCase extends Component {

  constructor(props){
    super(props)
    this.productList = [];
    var self = this;

    retrieveProducts().then((response)=> {
      this.productList = response;
      self.setState({productList: response});
    });
  }

  setBag(bag){
    this.bag = bag;
  }

  render() {
    return (
      <div className="showCase">
        {this.productList.map(element => <Product content={element} bag={this.bag} />)} 
      </div>
    )
      
  }
}
export default ShowCase;