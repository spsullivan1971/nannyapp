(function() {
  'use strict';
  angular
    .module('nannyHero')
    .controller('HomeController', function($scope, $routeParams, FamilyService){

        $scope.navUser = function() {

        }
        $scope.navFamily = function() {

        }
        $scope.fetchNannyInfo = function(nannyName) {
          FamilyService.getNannyInfo(nannyName).then(function (info){
            console.log(info);
          });
        };
    });
})();
