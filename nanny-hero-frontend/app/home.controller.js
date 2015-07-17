(function() {
  'use strict';
  angular
    .module('nannyHero')
    .controller('HomeController', function($scope, $routeParams, $rootScope, FamilyService){

        $scope.navUser = function() {

        }
        $scope.navFamily = function() {

        }
        $scope.fetchNannyInfo = function(nannyName) {
          FamilyService.getNannyInfo(nannyName).then(function(info){
            $rootScope.nannyInfo = info.data[0];
            console.log(info.data[0])
            console.log(info.data[0].name);
            console.log($scope.nannyInfo.name);
          })
        };
        $scope.fetchFamilyInfo = function(familyName) {
          FamilyService.getFamily(familyName).then(function(data) {
            $rootScope.familyInfo = info.data[0];
            console.log(info.data[0])
          })
        }
    });
})();
