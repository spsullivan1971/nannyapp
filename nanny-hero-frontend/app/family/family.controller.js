(function() {
  'use strict';

  angular
    .module('family')
    .controller('FamilyController', function ($scope, $rootScope,FamilyService, $location) {

      $scope.getFamily = function(familyName) {
        FamilyService.getFamily()
      };

      $scope.addFamily = function(familyObject, childInfo){
        // if(childInfo === undefined){
        //   $rootScope.family = familyObject;
        //   console.log("family is: ", familyObject);
        //   // FamilyService.addFamily(familyObject);
        //   $location.path('/myFamily');
        // }
        // else{
        if(childInfo === undefined){

          alert("Child Name Must Be Present");
        }
        else if (childInfo !== undefined) {
          if(childInfo.name === ""){
            alert("Child Name Must Be Present");
          }
          else{
            var children = $rootScope.family.child.length;
            $rootScope.family.child[children] = childInfo;
            console.log("family is: ", $rootScope.family);
            // FamilyService.addFamily(familyObject);
            $location.path('/myFamily');
          }
        }
        else{
          var children = $rootScope.family.child.length;
          $rootScope.family.child[children] = childInfo;
          console.log("family is: ", $rootScope.family);
          // FamilyService.addFamily(familyObject);
          $location.path('/myFamily');
        }

        // }
      };

      var defaultAddChild ={
        name: "",
        age: "",
        allergies: "",
        favoriteFood: "",
        interests: "",
        bedTime: "",
        pottyTrained: false,
        specialNeeds: false
      }


      $scope.addChild = function(family, childInfo){

        $rootScope.family = family;
        console.log("in add child family is: ", $rootScope.family);

        if($rootScope.family.child === undefined){
          $rootScope.family.child = [];
          console.log("child", $rootScope.family.child);
          $location.path('/addChild');
        }
        else{
          var children = $rootScope.family.child.length;
          $rootScope.family.child[children] = childInfo;
          console.log($rootScope.family.child);
          $scope.addChildForm.$setPristine();
          $scope.child = defaultAddChild;
          $location.path('/addChild');
        }
      };

    });
}());

//font view width
