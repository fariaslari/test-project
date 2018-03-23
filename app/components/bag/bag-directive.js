'use strict';

angular.module('testProject', [])
.directive('productBag', [function() {
  return {
    restrict: 'EA',
    templateUrl: 'components/bag/bag-template.html'
  }
}]);