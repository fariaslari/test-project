import React from 'react';
import http from 'http';

export function retrieveProducts(context, callback){
    return new Promise(function(resolve, reject){
        getData(function(response){
            resolve(response.products);
        });
    });
}

function getData(callback){
    var options = {
        "method": "GET",
        "hostname": "localhost",
        "port": "8081",
        "path": "/store/products",
        "headers": {
        }
      };
  
      var req = http.request(options, function (res) {
        var chunks = [];
  
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
  
        res.on("end", function () {
          var body = Buffer.concat(chunks);
          var json = JSON.parse(body.toString());
          
          callback(json);
        });
      });
  
      req.end();
}