'use strict';

var app = angular.module('evuiApp', ['ev.controller', 'vips.list.ctrl', 'checkstand.ctrl', 'ui.router', 'ng-sweet-alert']);

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
      controller: 'CheckstandCtrl',
      onEnter: function() {
        // console.log('onEnter event fired.');
        // console.log($('.ui.modal'));
        //清除多余生成的.ui.modal
        if ($('.ui.modal').length > 0) {
          $('.ui.modal').remove();
        }
      }
    })
    .state('bugReport', {
      url: '/bugReport',
      templateUrl: 'partials/bug.report.html'
    });
});
