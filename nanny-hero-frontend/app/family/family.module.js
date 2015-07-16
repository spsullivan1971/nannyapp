(function() {
  'use strict';

  angular
    .module('family', [
      'ngRoute'
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/addFamily', {
          templateUrl: 'family/views/family.html',
          controller: 'FamilyController'
        })
        .when('/addChild',{
          templateUrl: 'family/views/addChild',
          controller: 'FamilyController'
        })
        .when('/myFamily', {
          templateUrl: 'family/views/myFamily.html',
          controller: 'FamilyController'
        })
    });
}());
