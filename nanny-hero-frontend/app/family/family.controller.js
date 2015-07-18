(function() {
  'use strict';

  angular
    .module('family')
    .controller('FamilyController', function ($scope, $rootScope,FamilyService, $location) {

      $scope.family= {
        name: "",
        phone_number: "",
        address: "",
        nanny: "",
        picture: ""
      }

      $scope.getFamily = function(familyName) {
        FamilyService.getFamily()
      };

      $scope.addFamily = function(familyObject, childInfo){
        if(childInfo === undefined){

          alert("Child Name Must Be Present");
        }
        else if (childInfo !== undefined) {
          if(childInfo.name === ""){
            alert("Child Name Must Be Present");
          }
          else{
            var children = $rootScope.family.children.length;
            $rootScope.family.children[children] = childInfo;
            console.log("family is: ", $rootScope.family);
            FamilyService.addFamily($rootScope.family);
            $location.path('/');
          }
        }
        else{
          var children = $rootScope.family.children.length;
          $rootScope.family.children[children] = childInfo;
          console.log("family is: ", $rootScope.family);
          FamilyService.addFamily($rootScope.family);
          $location.path('/');
        }
      };

      $scope.child= {
        name: "",
        age: "",
        allergies: "",
        fav_food: "",
        interests: "",
        bed_time: "",
        potty_trained: false,
        special_needs: false
      }

      var defaultAddChild ={
        name: "",
        age: "",
        allergies: "",
        fav_food: "",
        interests: "",
        bed_time: "",
        potty_trained: false,
        special_needs: false
      }


      $scope.addChild = function(family, childInfo){

        if(family !== null){
          $rootScope.family = family;
          console.log("in add child family is: ", $rootScope.family);
        }


        if(childInfo === null){
          $rootScope.family.children = [];
          console.log("child", $rootScope.family.children);
          $location.path('/addChild');
        }
        else{
          var children = $rootScope.family.children.length;
          $rootScope.family.children[children] = childInfo;
          console.log($rootScope.family);
          console.log($rootScope.family.children);
          $scope.addChildForm.$setPristine();
          $scope.child = defaultAddChild;
          $location.path('/addChild');
        }
      };

    });
}());

//font view width
