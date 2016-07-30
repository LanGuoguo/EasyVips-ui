'use strict';

var ctrl = angular.module('vips.list.ctrl', []);

ctrl.controller('VipsListCtrl', function($scope) {
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
      angular.forEach($scope.vipsTable.lists, function(value, key) {
        value.selected = 'positive';
      });
    } else {
      $childCheckbox.checkbox('set unchecked');
      angular.forEach($scope.vipsTable.lists, function(value, key) {
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
