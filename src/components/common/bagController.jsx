import React from 'react';
import DateFormat from 'dateformat';

export function getBag(){
    let bagKey = localStorage.getItem('bagKey');
    if(!bagKey || bagKey == ""){
        bagKey = generateBagKey(localStorage);
    }

    let bag = localStorage.getItem(bagKey);
    if(!bag || bag == ""){
        bag = {
            key: bagKey,
            itens: []
        };
        return bag;
    }
    return JSON.parse(bag);
}

export function addToBag(product, size){
    let bag = getBag();
    bag = addItem(bag, product, size);
  
    localStorage.setItem(bag.key, JSON.stringify(bag));
}

export function removeFromBag(product){
    let bag = getBag();
    bag = removeItem(bag, product);
    console.log(bag);
    localStorage.setItem(bag.key, JSON.stringify(bag));
}

function generateBagKey(){
    let now = new Date();
    let dateTime = DateFormat(now, "isoDateTime");
    let bagKey = Buffer.from("bagKey" + dateTime).toString('base64');
    localStorage.setItem('bagKey', bagKey);
  
    return bagKey;
}

function addItem(bag, product, size){
    let bagItem = {}
    bagItem = bag.itens.find(item => (item.id == product.id && item.size == size));
  
    if(!bagItem){
        bagItem = product;
        bagItem.size = size;
        bagItem.quantity = 1;
        bag.itens.push(bagItem);
    }else{
        bagItem.quantity++;
    }
  
  return bag;
}

function removeItem(bag, product){
    bag.itens = bag.itens.filter(item => !(item.id == product.id && item.size == product.size));
    
    return bag;
}