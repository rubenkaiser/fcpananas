import './scss/style.scss';

var baseUrl = 'https://dc4eu4r9dh.execute-api.eu-west-1.amazonaws.com/prod/api'; // http://localhost:3000/api

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$('document').ready(function(){

  if (window.location.href.indexOf('?payment=true') > -1) {
    $('.modal-text.register').show();
    $('#thankyou').show();
    $('.modal').show();

    setTimeout(function() {
      $('#thankyou').hide();
    }, 5000);
  }

  $('.modal-btn').on('click', function() {
    var modalType = $(this).data('type');
    $('.modal-text').hide();
    $('.modal-text.'+modalType).show();
    $('.modal').show();
  });

  $('.close').on('click', function() {
    $('.modal').hide();
  });

  $('#teamName').on('input', function() {
    console.log($('#teamName').val());
    if ($('#teamName').val().length > 5) {
      $('#error').hide();
    }
  });

  $('#pay').on('click', function() {
    console.log('pay');
    if ($('#teamName').val().length > 5 && validateEmail($('#email').val())) {

      $.ajax({
        url: baseUrl+'/payments',
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify({ 
          teamName: $('#teamName').val(),
          extraMeat: $('#extraMeat').val(),
          email: $('#email').val()
        }),
        dataType: 'json',
        success: function(result){
          if (result.link && result.id) {
            window.location.replace(result.link);
          }
        },
        error: function(xhr, ajaxOptions, thrownError) {
          alert('Er is iets fout gegaan. Probeer het nog eens.')
        }
      });

    } else {
      $('#error').show();
    }
  });
});