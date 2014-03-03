 $(document).ready(function() {
    $('.placeholder, .input input').click(function  () {
        $('.placeholder').css('display','none');
        $('.input input').focus();
    });

    $('.button button.send').click( function () {
        var text = $('.input input').val();
        $('.chat div:last-child').after('<div class="chat__me">' + text + '</div>');
        scrollEnd();
    });

    $('.button button.you').click( function () {
        var text = 'some text';
        $('.chat div:last-child').after('<div class="chat__you">' + text + '</div>');
        scrollEnd();
    })


    function scrollEnd (argument) {
        $('.chat').scrollTop(500);       
    }
    //if ( $('.chat').css('height') > )
   // $('.chat').scrollTop = 999999999; 
    
});