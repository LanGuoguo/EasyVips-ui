'use strict';

var ctrl = angular.module('checkstand.ctrl', []);

ctrl.controller('CheckstandCtrl', function($scope, $timeout, $log, SweetAlert) {
  $.getScript('js/entrance/checkstand.list.js');

  $scope.payLoader = {
    active : ''
  };

  $scope.payCancel = function() {
    $('.ui.modal.pay').modal('toggle'); //close modal
  }

  $scope.paySubmit = function() {
    $log.log('paySubmit entered.');
    $scope.payLoader.active = 'active';
    $timeout(function() {
      SweetAlert.success('收款成功', {title: '', confirmButtonText: '好的'}); //success callback
      $scope.payLoader.active = ''; //close loading
      $('.ui.modal.pay').modal('toggle'); //close modal
    }, 1000);
  };

  $scope.rechargeLoader = {
    active : ''
  };

  $scope.rechargeCancel = function() {
    $('.ui.modal.recharge').modal('toggle'); //close modal
  }

  $scope.rechargeSubmit = function() {
    $scope.rechargeLoader.active = 'active';
    $timeout(function() {
      SweetAlert.success('充值成功', {title: '', confirmButtonText: '好的'}); //success callback
      $scope.rechargeLoader.active = ''; //close loading
      $('.ui.modal.recharge').modal('toggle'); //close modal
    }, 1000);
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
    '金额（元）',
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

  $scope.checkMaster = function($event) {
    var
      $target = $($event.target),
      $master = $($event.currentTarget),
      checked = $master.checkbox('is checked'),
      $childCheckbox  = $('tr.list .checkbox.child')
    ;

    if($target[0] !== $master.find('input')[0]) { //click label or div return false
      checked = !checked;
    }

    if (checked) {
      $childCheckbox.checkbox('set checked');
      angular.forEach($scope.paymentTable.lists, function(value, key) {
        value.selected = 'positive';
      });
    } else {
      $childCheckbox.checkbox('set unchecked');
      angular.forEach($scope.paymentTable.lists, function(value, key) {
        value.selected = '';
      });
    }
  };

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

    //联动 parentCheckbox
    var
      $parentCheckbox = $('.first .master.checkbox'),
      $checkboxs      = $('tr.list .checkbox.child'),
      allChecked      = true,
      allUnchecked    = true
    ;
    // check to see if all other siblings are checked or unchecked
    $checkboxs.each(function() {
      if( $(this).checkbox('is checked') ) {
        allUnchecked = false;
      }
      else {
        allChecked = false;
      }
    });
    // set parent checkbox state, but dont trigger its onChange callback
    if(allChecked) {
      $parentCheckbox.checkbox('set checked');
    }
    else if(allUnchecked) {
      $parentCheckbox.checkbox('set unchecked');
    }
    else {
      $parentCheckbox.checkbox('set indeterminate');
    }
  };
});
