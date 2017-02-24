$(function() {
  $(document).on('click', '.floating-menu a', function () {
    event.preventDefault();
    $(this).parent().toggleClass('toggled');
    $('.floating-menu-detailed').toggleClass('open');
  })
  $(document).on('click', '.floating-menu-detailed a.close', function () {
    event.preventDefault();
    $('.floating-menu').removeClass('toggled');
    $('.floating-menu-detailed').removeClass('open');
  })
});
