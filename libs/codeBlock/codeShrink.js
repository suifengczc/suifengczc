// 代码块收缩

$(function () {
  var $code_expand = $('<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>');

  $('.code-area').prepend($code_expand);
  $('.code-expand').on('click', function () {
    if ($(this).parent().hasClass('code-closed')) {
      $(this).siblings('pre').find('ol').show();
      $(this).parent().removeClass('code-closed');
    } else {
      $(this).siblings('pre').find('ol').hide();
      $(this).parent().addClass('code-closed');
    }
  });
});
