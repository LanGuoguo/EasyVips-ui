'use strict';

var controller = angular.module('ev.controller', []);

controller.controller('mainCtrl', function($scope, $location, $timeout, $log) {
  $scope.menus = [];
  $scope.menus = [
    {
      name: '商家服务',
      url: '#/merchant/vips.list',
      icon: 'shop',
      active: ''
    },
    {
      name: '系统服务',
      url: '#/system/value.added.services',
      icon: 'server',
      active: ''
    }
  ];

  var
    shops = [
      {
        name: '会员管理',
        url: '#/merchant/vips.list',
        icon: 'home',
        active: ''
      },
      {
        name: '收银台',
        url: '#/merchant/checkstand',
        icon: 'add to cart',
        active: ''
      },

    ],
    system = [
      {
        name: '增值服务',
        url: '#/system/value.added.services',
        icon: 'bug',
        active: ''
      },
      {
        name: '我要吐槽',
        url: '#/system/bugReport',
        icon: 'bug',
        active: ''
      }
    ]
  ;

  $scope.subnavs = shops;

  //根据 Browser 地址栏的 URL 设置菜单和面包屑
  $scope.coumpteCurrentSubnav = function() {
    var
      path = '#' + $location.path(),
      name
    ;
    angular.forEach($scope.subnavs, function(value, key) {
      if (value.url === path) {
        value.active = 'active';
        name = value.name;
      }
    });
    $scope.currentSubnav = name;
  };

  $scope.menugate = function() {
    // console.log('navigate enter');
    angular.forEach($scope.menus, function(value, key) {
      value.active = '';
    });
    this.menu.active = 'active';
    $scope.currentMenu = this.menu.name;

    if (this.menu.name === '系统服务') {
      $scope.subnavs = system;
      // $scope.currentSubnav = '';
    } else {
      $scope.subnavs = shops;
      // $scope.currentSubnav = '';
    }

    $timeout(function() {
      $scope.coumpteCurrentSubnav();
    }, 500);
  };

  $scope.navigate = function() {
    // console.log('navigate enter');
    angular.forEach($scope.subnavs, function(value, key) {
      value.active = '';
    });
    this.nav.active = 'active';
    $scope.currentSubnav = this.nav.name;
  };

  $scope.currentMenu = $scope.menus[0].name;

  $scope.coumpteCurrentSubnav();
});
