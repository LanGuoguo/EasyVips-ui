'use strict';

(function() {

  //清除多余生成的.ui.modal，仅保留最后生成的modal
  // var modals = $('.ui.modal');
  // for (var i = 0, len = modals.length; i < (len - 1); i++) {
  //   $(modals[i]).remove();
  // }
  $('.ui.list .filter.icon')
    .popup({
      title: '筛选',
      content: '尚在开发中，敬请期待',
      on    : 'hover'
    })
  ;

  $('.ui.modal.pay')
    .modal('attach events', '.button.pay', 'toggle')
  ;

  $('.ui.modal.recharge')
    .modal('attach events', '.button.recharge', 'toggle')
  ;

  $('.ui.modal')
    .modal('setting', 'closable', false)
    .modal({
      inverted: true
    })
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

  $('.ui.accordion')
    .accordion()
  ;

//   $('.first .master.checkbox')
//   .checkbox({
//     // check all children
//     onChecked: function() {
//       var
//         $childCheckbox  = $('tr.list .checkbox.child'),
//         $childTr = $('tr.list')
//       ;
//       $childTr.addClass('positive');
//       $childCheckbox.checkbox('check');
//     },
//     // uncheck all children
//     onUnchecked: function() {
//       var
//         $childCheckbox  = $('tr.list .checkbox.child'),
//         $childTr = $('tr.list')
//       ;
//       $childTr.removeClass('positive');
//       $childCheckbox.checkbox('uncheck');
//     }
//   })
// ;

// $('tr.list .checkbox.child')
//   .checkbox({
//     // Fire on load to set parent value
//     fireOnInit : true,
//     // Change parent state on each child checkbox change
//     onChange   : function() {
//       var
//         $parentCheckbox = $('.first .master.checkbox'),
//         $checkbox       = $('tr.list .checkbox.child'),
//         allChecked      = true,
//         allUnchecked    = true
//       ;
//       // check to see if all other siblings are checked or unchecked
//       $checkbox.each(function() {
//         if( $(this).checkbox('is checked') ) {
//           allUnchecked = false;
//         }
//         else {
//           allChecked = false;
//         }
//       });
//       // set parent checkbox state, but dont trigger its onChange callback
//       if(allChecked) {
//         $parentCheckbox.checkbox('set checked');
//       }
//       else if(allUnchecked) {
//         $parentCheckbox.checkbox('set unchecked');
//       }
//       else {
//         $parentCheckbox.checkbox('set indeterminate');
//       }
//     }
//   })
// ;

})();
