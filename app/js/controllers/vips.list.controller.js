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

});
