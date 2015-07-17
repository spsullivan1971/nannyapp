(function() {
  'use strict';
  angular
    .module('family')
    .factory('FamilyService', function ($http, $rootScope) {

          var url = 'http://localHost:3000';

          var addFamily = function(familyObject){
            $http.post(url, familyObject);
          };

          var getFamily = function(familyName){
            $http.get(url, familyName);
          }

          var updateFamily = function(familyId){
            $http.post(url, familyId);
          }

          var deleteFamily = function(familyId){
            $http.delete(url, familyId);
          }

          return {
            addFamily: addFamily,
            getFamily: getFamily,
            updateFamily: updateFamily,
            deleteFamily: deleteFamily
          };
  });

}());
