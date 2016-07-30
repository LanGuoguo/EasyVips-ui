'use strict';

(function() {
  // using context
  $('.ui.sidebar')
  .sidebar({
    context: $('.bottom.segment')
  })
  // .sidebar('setting', 'dimPage', false)
  .sidebar('setting', 'closable', false)
  .sidebar('setting', 'transition', 'overlay')
  .sidebar('attach events', '.menu .item.sidebar-menu')
  ;

  // $('.ui.sidebar').on('click', 'a', function() {
  //   var sidebarLinks = $('.ui.sidebar a');
  //   for (var i = 0, len = sidebarLinks.length; i < len; i++) {
  //     var link = sidebarLinks[i];
  //     if ($(link).hasClass('active')) {
  //       $(link).toggleClass('active');
  //     }
  //   }
  //   $(this).toggleClass('active');
  // });

  // $('.menu .item.sidebar-menu').click();

  console.log(window.innerHeight);
  $('.ev-container')[0].style.height = $('.pusher-container')[0].style.height = (window.innerHeight - 115) + 'px';
  // $('.pusher-container')[0].style.height = (window.innerHeight - 115) + 'px

})();
