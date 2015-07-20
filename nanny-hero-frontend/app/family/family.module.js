(function() {
  'use strict';

  angular
    .module('family', [
      'ngRoute'
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/addFamily', {
          templateUrl: 'app/family/views/family.html',
          controller: 'FamilyController'
        })
        .when('/addChild',{
          templateUrl: 'app/family/views/addChild.html',
          controller: 'FamilyController'
        })
        .when('/myFamily', {
          templateUrl: 'app/family/views/myFamily.html',
          controller: 'FamilyController'
        })
        .when('/editFamily', {
          templateUrl: 'app/family/views/editFamily.html',
          controller: 'FamilyController'
        })
    });
})();
