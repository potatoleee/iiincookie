$(document).ready(function(){

    $('.pagetop').click(function(){
        $('html,body').animate({
         scrollTop:0
        },
         1000);
 });

    $('.btn-buger').click(function(e){
        $('.nav-content_main').toggleClass('open');
        $('.btn-buger').addClass('open');
    })


})