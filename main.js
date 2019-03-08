
function main() {

  $('#grow-me').addClass('big');
  $('#shrink-me').removeClass('big');

  $('.list').find('li').each(function() {
    console.log( $(this).text() );

    $('#hide-me').hide();
    $('#show-me').css("display", "block");

});

}

$('#action').on("click", main);
