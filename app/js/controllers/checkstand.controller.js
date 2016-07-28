'use strict';

var ctrl = angular.module('checkstand.ctrl', []);

ctrl.controller('CheckstandCtrl', function($scope) {
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
    '消费时间',
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
      selected: '',
      id: 1,
      customer: 'Customer',
      phone: '12345678901',
      balances: '0.00',
      consumeTime: '2016-07-29 01:15:00',
      expense: '30.00',
      deductBalance: '0.00',
      cash: '100.00',
      change: '70.00',
      coupon: '--',
      isVip: '--',
      note: '--'
    },
    {
      selected: '',
      id: 2,
      customer: 'Customer',
      phone: '12345678901',
      balances: '0.00',
      consumeTime: '2016-07-29 01:15:00',
      expense: '30.00',
      deductBalance: '0.00',
      cash: '100.00',
      change: '70.00',
      coupon: '--',
      isVip: '--',
      note: '--'
    },
    {
      selected: '',
      id: 3,
      customer: 'Customer',
      phone: '12345678901',
      balances: '0.00',
      consumeTime: '2016-07-29 01:15:00',
      expense: '30.00',
      deductBalance: '0.00',
      cash: '100.00',
      change: '70.00',
      coupon: '--',
      isVip: '--',
      note: '--'
    },
    {
      selected: '',
      id: 4,
      customer: 'Customer',
      phone: '12345678901',
      balances: '0.00',
      consumeTime: '2016-07-29 01:15:00',
      expense: '30.00',
      deductBalance: '0.00',
      cash: '100.00',
      change: '70.00',
      coupon: '--',
      isVip: '--',
      note: '--'
    },
    {
      selected: '',
      id: 5,
      customer: 'Customer',
      phone: '12345678901',
      balances: '0.00',
      consumeTime: '2016-07-29 01:15:00',
      expense: '30.00',
      deductBalance: '0.00',
      cash: '100.00',
      change: '70.00',
      coupon: '--',
      isVip: '--',
      note: '--'
    },
    {
      selected: '',
      id: 6,
      customer: 'Customer',
      phone: '12345678901',
      balances: '0.00',
      consumeTime: '2016-07-29 01:15:00',
      expense: '30.00',
      deductBalance: '0.00',
      cash: '100.00',
      change: '70.00',
      coupon: '--',
      isVip: '--',
      note: '--'
    },
    {
      selected: '',
      id: 7,
      customer: 'Customer',
      phone: '12345678901',
      balances: '0.00',
      consumeTime: '2016-07-29 01:15:00',
      expense: '30.00',
      deductBalance: '0.00',
      cash: '100.00',
      change: '70.00',
      coupon: '--',
      isVip: '--',
      note: '--'
    },
    {
      selected: '',
      id: 8,
      customer: 'Customer',
      phone: '12345678901',
      balances: '0.00',
      consumeTime: '2016-07-29 01:15:00',
      expense: '30.00',
      deductBalance: '0.00',
      cash: '100.00',
      change: '70.00',
      coupon: '--',
      isVip: '--',
      note: '--'
    },
    {
      selected: '',
      id: 9,
      customer: 'Customer',
      phone: '12345678901',
      balances: '0.00',
      consumeTime: '2016-07-29 01:15:00',
      expense: '30.00',
      deductBalance: '0.00',
      cash: '100.00',
      change: '70.00',
      coupon: '--',
      isVip: '--',
      note: '--'
    },
    {
      selected: '',
      id: 10,
      customer: 'Customer',
      phone: '12345678901',
      balances: '0.00',
      consumeTime: '2016-07-29 01:15:00',
      expense: '30.00',
      deductBalance: '0.00',
      cash: '100.00',
      change: '70.00',
      coupon: '--',
      isVip: '--',
      note: '--'
    }
  ];

  $scope.checkTr = function($event) {
    //选中 OR 取消选中当前 CHECKBOX
    var
      $target = $($event.target),
      $checkbox = $($event.currentTarget).find('.checkbox')
    ;

    if (!($target.parent('.checkbox').length > 0 || $target.parent('.collapsing').length > 0)) {
      $checkbox
        .checkbox('toggle')
      ;
    }

    //选中 OR 取消选中当前 TR
    var selected = $checkbox.checkbox('is checked');
    if (selected) {
      this.list.selected = 'positive';
    } else {
      this.list.selected = '';
    }
  };
});
