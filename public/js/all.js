$(document).ready(function(){
// scoll top
    $('.pagetop').click(function(){
        $('html,body').animate({
         scrollTop:0
        },
         1000);
 });// scoll end

//  漢堡選單 start

    $('.btn-buger').click(function(e){
        $('.nav-content_main').toggleClass('open');
        $('.btn-buger').toggleClass('open');
    })//  漢堡選單 end

//點小圖換大圖 start
$('.sub-product img').click(function(e){

$('.main-product ').attr('src',$(this).attr('src'));
})


//faq

$('.faq-title').click(function(e){
    $(this).find('.btn-faq').toggleClass('open');
    $(this).siblings('.faq-title_p').slideToggle();
    $(this).toggleClass('text-title_color');
    $(this).parent().siblings().find('.faq-title_p').slideUp();
    $(this).parent().siblings().find('.faq-title').removeClass('text-title_color');
    $(this).parent().siblings().find('.btn-faq').removeClass('open');


})

})//end



