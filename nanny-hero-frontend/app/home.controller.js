(function() {
  'use strict';
  angular
    .module('nannyHero')
    .controller('HomeController', function($scope, $routeParams, $rootScope, FamilyService, $modal, $log, $location){

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
          FamilyService.getFamily(familyName).success(function(info) {
            $rootScope.familyInfo = info;
            console.log(info)
            $location.path('/myFamily');
          }).error(function(data){
            $location.path('/addFamily');
          })
        }

        $scope.animationsEnabled = true;

        $scope.open = function (size, data) {

        var modalInstance = $modal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/family/views/modal.html',
          controller: 'ModalInstanceCtrl'
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
        };

        })

        .controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

        $scope.close = function () {
          $modalInstance.close($scope.selected);
        };

    });
})();
