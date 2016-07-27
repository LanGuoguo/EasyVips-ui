'use strict';

var app = angular.module('evuiApp', ['ev.controller', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/index');

  $stateProvider
    .state('index', {
      url: '/index',
      templateUrl: 'partials/vips.list.html',
      controller: function($scope) {
        $.getScript('js/entrance/vips.list.js');
      }
    })
    .state('checkstand', {
      url: '/checkstand',
      templateUrl: 'partials/checkstand.list.html',
      controller: function($scope) {
        $.getScript('js/entrance/checkstand.list.js');

        $scope.active = '';

        $scope.paySubmit = function() {
          $scope.active = 'active';
        };
      }
    })
    .state('bugReport', {
      url: '/bugReport',
      templateUrl: 'partials/bug.report.html'
    });
});
