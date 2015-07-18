(function() {
  'use strict';

  angular
    .module('nanny')
    .controller('NannyController', function ($scope, FamilyService, $location) {

        $scope.deleteFamily = function() {
          console.log("I need a delete function");
        };

    });
}());
