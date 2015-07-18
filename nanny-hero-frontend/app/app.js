(function() {
  'use strict';
  angular
    .module('nannyHero', [
      'ngRoute',
      'family',
      'nanny',
      'ui.bootstrap'
      ])
    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'app/home.html',
        controller: 'HomeController'
      })
      .when('/404', {
        template: '<div>' +
                    '<h2 style="color:white; font-size: 4em; font-family: sans-serif;">Whoops! Page not found.</h2>' +
                   '</div>'
      })
      .otherwise ({
        redirectTo: '/404'
      })
    })
})();
