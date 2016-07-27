'use strict';

var controller = angular.module('ev.controller', []);

controller.controller('mainCtrl', function($scope) {
  $scope.menus = [];
  $scope.menus = [
    {
      name: '会员管理',
      url: '#/index',
      icon: 'home',
      active: 'active'
    },
    {
      name: '收银台',
      url: '#/checkstand',
      icon: 'add to cart',
      active: ''
    },
    {
      name: '我要吐槽',
      url: '#/bugReport',
      icon: 'bug',
      active: ''
    }
  ];

  $scope.navigate = function() {
    console.log('navigate enter');
    angular.forEach($scope.menus, function(value, key) {
      value.active = '';
    });
    this.menu.active = 'active';
    $scope.activeBreadcrumb = this.menu.name;
  };

  $scope.activeBreadcrumb = '会员管理';

});
