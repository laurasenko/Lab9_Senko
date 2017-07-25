$( document ).ready(function() {



$( 'li a' ).hover(
    function() { $( this ).fadeTo( 'fast', '.25'); },
    function() { $( this ).fadeTo( 'fast', '1');
  });

$('li a').on('click', function() {
        $(this).css('background-color', 'purple');
        $(this).text( this.text + ' Clicked!');
});


});
