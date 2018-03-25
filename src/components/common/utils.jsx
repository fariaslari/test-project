import React from 'react';

export function formatPrice(obj){
    obj.intPrice = Math.floor(obj.price);
    obj.decimalPart = (obj.price - Math.floor(obj.price)).toFixed(2) * 100;
    return obj;
}
