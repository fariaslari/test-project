import React, { Component } from 'react';

class ProductBag extends Component {
  render() {
    return (
      <div className="productBag">
        <div className="title">
          <img src='/dist/assets/img/bag-icon.png'></img>
          <span>sacola</span>
        </div>

        <div className="product">
          <div className="pic">
            <img src="pic"></img>
          </div>
          <div className="descp">
            <span className="name">
              Camisa Corinthias College 77
            </span>
            <div className="info">
              <span className="line">
                GGG | Preto e branco
              </span>
              <span className="line">
                Quantidade: 2
              </span>
            </div>
          </div>
          <div className="price">
          R$ <b>179</b>,99
          </div>
        </div>


        <div className="product">
          <div className="pic">
            <img src="pic"></img>
          </div>
          <div className="descp">
            <span className="name">
              Camisa Corinthias College 77 FEFDSFDSFDSFDSF DSFDSFDSFDSFDSFDSFDSFDS FDSFDSFDSFDSFDSFDSF
            </span>
            <div className="info">
              <span className="line">
                GGG | Preto e branco
              </span>
              <span className="line">
                Quantidade: 2
              </span>
            </div>
          </div>
          <div className="price">
            R$ <b>179</b>,99
          </div>
        </div>
      </div>
    )
  }
}
export default ProductBag;