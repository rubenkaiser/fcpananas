import './scss/style.scss';

$('document').ready(function(){
  $('.modal-btn').on('click', function() {
    var modalType = $(this).data('type');
    $('.modal-text').hide();
    $('.modal-text.'+modalType).show();
    $('.modal').show();
  });

  $('.close').on('click', function() {
    $('.modal').hide();
  });
});