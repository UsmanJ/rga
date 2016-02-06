'use strict';

/**
 * @ngdoc overview
 * @name rgaAssessmentApp
 * @description
 * # rgaAssessmentApp
 *
 * Main module of the application.
 */
angular
  .module('rgaAssessmentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
