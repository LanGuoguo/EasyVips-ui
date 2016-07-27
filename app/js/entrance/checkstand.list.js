(function() {

  //清除多余生成的.ui.modal，仅保留最后生成的modal
  var modals = $('.ui.modal');
  for (var i = 0, len = modals.length; i < (len - 1); i++) {
    $(modals[i]).remove();
  }

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
