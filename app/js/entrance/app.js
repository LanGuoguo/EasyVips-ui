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

        $scope.vipsTable = {
          heads: [],
          lists: []
        };
        $scope.vipsTable.heads = [
          '姓名',
          '手机',
          '余额（元）',
          '备注'
        ];

        $scope.vipsTable.lists = [
          {
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            note: '--'
          },
          {
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            note: '--'
          },
          {
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            note: '--'
          },
          {
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            note: '--'
          },
          {
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            note: '--'
          },
          {
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            note: '--'
          },
          {
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            note: '--'
          },
          {
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            note: '--'
          },
          {
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            note: '--'
          },
          {
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            note: '--'
          }
        ];
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

        $scope.checked = [];
        $scope.recharge = function() {
          // console.log('recharge entered');
          $scope.checked = [];
          var $checkbox = $('tr.list .checkbox.child');
          angular.forEach($checkbox, function(value, key) {
            var
              $input = $(value).find('input'),
              id = $input.val(),
              index = $scope.checked.indexOf(id)
            ;

            if ($(value).checkbox('is checked')) {
              if (id) {
                $scope.checked.push(id);
              }
            } else {
              if (index > 0) {
                $scope.checked.splice(index, 1);
              }
            }
          });
          // console.log($scope.checked);
          
        };

        $scope.paymentTable = {
          heads: [],
          lists: []
        };
        $scope.paymentTable.heads = [
          '顾客',
          '手机',
          '余额（元）',
          '消费金额（元）',
          '余额扣减（元）',
          '收银（元）',
          '找零（元）',
          '优惠',
          '会员',
          '备注'
        ];

        $scope.paymentTable.lists = [
          {
            id: 1,
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            expense: '30.00',
            deductBalance: '0.00',
            cash: '100.00',
            change: '70.00',
            coupon: '--',
            isVip: '--',
            note: '--'
          },
          {
            id: 2,
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            expense: '30.00',
            deductBalance: '0.00',
            cash: '100.00',
            change: '70.00',
            coupon: '--',
            isVip: '--',
            note: '--'
          },
          {
            id: 3,
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            expense: '30.00',
            deductBalance: '0.00',
            cash: '100.00',
            change: '70.00',
            coupon: '--',
            isVip: '--',
            note: '--'
          },
          {
            id: 4,
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            expense: '30.00',
            deductBalance: '0.00',
            cash: '100.00',
            change: '70.00',
            coupon: '--',
            isVip: '--',
            note: '--'
          },
          {
            id: 5,
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            expense: '30.00',
            deductBalance: '0.00',
            cash: '100.00',
            change: '70.00',
            coupon: '--',
            isVip: '--',
            note: '--'
          },
          {
            id: 6,
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            expense: '30.00',
            deductBalance: '0.00',
            cash: '100.00',
            change: '70.00',
            coupon: '--',
            isVip: '--',
            note: '--'
          },
          {
            id: 7,
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            expense: '30.00',
            deductBalance: '0.00',
            cash: '100.00',
            change: '70.00',
            coupon: '--',
            isVip: '--',
            note: '--'
          },
          {
            id: 8,
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            expense: '30.00',
            deductBalance: '0.00',
            cash: '100.00',
            change: '70.00',
            coupon: '--',
            isVip: '--',
            note: '--'
          },
          {
            id: 9,
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            expense: '30.00',
            deductBalance: '0.00',
            cash: '100.00',
            change: '70.00',
            coupon: '--',
            isVip: '--',
            note: '--'
          },
          {
            id: 10,
            customer: 'Customer',
            phone: '12345678901',
            balances: '0.00',
            expense: '30.00',
            deductBalance: '0.00',
            cash: '100.00',
            change: '70.00',
            coupon: '--',
            isVip: '--',
            note: '--'
          }
        ];
      }
    })
    .state('bugReport', {
      url: '/bugReport',
      templateUrl: 'partials/bug.report.html'
    });
});
