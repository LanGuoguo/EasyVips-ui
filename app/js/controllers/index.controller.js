'use strict';

var controller = angular.module('ev.controller', []);

controller.controller('mainCtrl', function($scope, $location, $log) {
  $scope.menus = [];
  $scope.menus = [
    {
      name: '会员管理',
      url: '#/vips.list',
      icon: 'home',
      active: ''
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
    // console.log('navigate enter');
    angular.forEach($scope.menus, function(value, key) {
      value.active = '';
    });
    this.menu.active = 'active';
    $scope.activeBreadcrumb = this.menu.name;
  };

  //根据 Browser 地址栏的 URL 设置菜单和面包屑
  $scope.activeBreadcrumb = (function() {
    var
      path = '#' + $location.path(),
      name
    ;
    angular.forEach($scope.menus, function(value, key) {
      if (value.url === path) {
        value.active = 'active';
        name = value.name;
      }
    });
    return name;
  })();
});
