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
            $rootScope.nannyInfo = info;
          })
        };
        $scope.fetchFamilyInfo = function(familyName) {
            if (familyName === undefined) {
              $location.path('/addFamily');
            } else {
            FamilyService.getFamily(familyName).success(function(info) {
              $rootScope.familyInfo = info;
              console.log(info)
              console.log(info.children)
              $location.path('/myFamily');
            }).error(function(data){
              $location.path('/addFamily');
            })
          }
        }

        $scope.deleteNanny = function(familyName) {
          FamilyService.deleteNanny(familyName).success(function(){
            console.log('No longer nanny for family');
          })
        };

        $scope.familyPage = function() {
          return $location.$$path === '/myFamily'
        }

        $scope.nannyPage = function() {
          return $location.$$path === '/nannyView'
        }

        $scope.animationsEnabled = true;

        $scope.open = function (size, data) {

        console.log($rootScope.nannyInfo)
        console.log($rootScope.nannyInfo.data.families)

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
