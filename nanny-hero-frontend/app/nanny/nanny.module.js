(function() {
  'use strict';

  angular
    .module('nanny', [
      'ngRoute'
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/nannyView', {
          templateUrl: 'app/nanny/views/nanny.html',
          controller: 'FamilyController'
        })
    });
})();
