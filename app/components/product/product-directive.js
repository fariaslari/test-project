'use strict';

angular.module('testProject', [])
.directive('product', [function() {
  return {
    templateUrl: 'components/product/product-template.html'
  }
}]);