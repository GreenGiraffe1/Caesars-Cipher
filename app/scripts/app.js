'use strict';

/**
 * @ngdoc overview
 * @name secretCipherApp
 * @description
 * # secretCipherApp
 *
 * Main module of the application.
 */
angular
  .module('secretCipherApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
