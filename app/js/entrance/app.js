'use strict';

var app = angular.module('evuiApp', ['ev.controller', 'vips.list.ctrl', 'checkstand.ctrl', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/vips.list');

  $stateProvider
    .state('vips', {
      url: '/vips.list',
      templateUrl: 'partials/vips.list.html',
      controller: 'VipsListCtrl'
    })
    .state('checkstand', {
      url: '/checkstand',
      templateUrl: 'partials/checkstand.list.html',
      controller: 'CheckstandCtrl'
    })
    .state('bugReport', {
      url: '/bugReport',
      templateUrl: 'partials/bug.report.html'
    });
});
