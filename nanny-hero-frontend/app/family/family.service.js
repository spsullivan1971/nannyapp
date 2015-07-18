(function() {
  'use strict';
  angular
    .module('family')
    .factory('FamilyService', function ($http, $rootScope) {

          var url = 'https://nanny-hero-backend.herokuapp.com/api/family';
          var nannyUrl = 'https://nanny-hero-backend.herokuapp.com/api/nanny';

          var addFamily = function(familyObject){
            console.log("in service: ", familyObject);
            var obj = {
              family: familyObject
            }
            console.log("this is the object: ", obj);
            $http.post(url + '.json', obj);
          };

          var getFamily = function(familyName){
            return $http.get(url + "/" + familyName + '.json');
          }

          var updateFamily = function(familyId){
            $http.post(url + '.json' + familyId);
          }

          var deleteFamily = function(familyId){
            $http.delete(url, familyId);
          }

          var getNannyInfo = function(nannyName){
            return $http.get(nannyUrl + "/" + nannyName + '.json');
          }

          var deleteNanny = function(familyName){
            return $http.delete(nannyUrl + "/" + familyName + '.json');
          }

          return {
            addFamily: addFamily,
            getFamily: getFamily,
            updateFamily: updateFamily,
            deleteFamily: deleteFamily,
            getNannyInfo: getNannyInfo,
            deleteNanny: deleteNanny
          };
  });

}());
