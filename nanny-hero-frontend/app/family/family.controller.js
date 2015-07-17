(function() {
  'use strict';

  angular
    .module('family')
    .controller('FamilyController', function ($scope, FamilyService) {

      $scope.getFamily = function(familyName) {
        FamilyService.getFamily()
      };

      $scope.addFamily = function(familyObject){
        FamilyService.addFamily(familyObject);
      };

      $scope.addChild = function(family){
          $scope.family = family;
      };

    });
}());

//font view width
