'use strict';

/**
 * @ngdoc function
 * @name ngOkcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngOkcApp
 */
angular.module('ngOkcApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
