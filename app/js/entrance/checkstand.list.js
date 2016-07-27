(function() {

  $('.ui.modal')
    .modal({
      inverted: true
    })
  ;

  $('.ui.modal.pay')
    .modal('attach events', '.button.pay', 'toggle')
  ;

  $('.ui.dropdown')
    .dropdown()
  ;

  $('.ui.corner.label.login-switch')
  .popup({
    title: '二维码付款',
    content: '尚在开发中，敬请期待',
    on    : 'hover'
  })
  ;

})();
