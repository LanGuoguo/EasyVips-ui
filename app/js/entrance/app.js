'use strict';

var app = angular.module('evuiApp', ['ev.controller', 'vips.list.ctrl', 'checkstand.ctrl', 'ui.router', 'ng-sweet-alert']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/merchant/vips.list');

  $stateProvider
    .state('vips', {
      url: '/merchant/vips.list',
      templateUrl: 'partials/vips.list.html',
      controller: 'VipsListCtrl'
    })
    .state('checkstand', {
      url: '/merchant/checkstand',
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
    .state('valueAddedServices', {
      url: '/system/value.added.services',
      templateUrl: 'partials/value.added.services.html'
    })
    .state('bugReport', {
      url: '/system/bugReport',
      templateUrl: 'partials/bug.report.html'
    });
});
