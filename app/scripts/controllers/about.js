'use strict';

/**
 * @ngdoc function
 * @name ngOkcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngOkcApp
 */
angular.module('ngOkcApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
