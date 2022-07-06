

$(document).ready(function(){
// scoll top
    $('.pagetop').click(function(){
        $('html,body').animate({scrollTop:0 },1000);
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

//每一次縮放視窗的時候執行
let windowWidth = $(window).width()

$(window).resize(function(){
    gsapAnimate()
    windowWidth = $(window).width()
})
// 這判斷還不沒完成

function gsapAnimate(){
if( $(window).width() >= 768){
    $(window).scroll(function(){
        offsetTop = $(window).scrollTop()
        // console.log(offsetTop/10)
        //x:“偏移”,“時間：數字越大呈現時間越久"
        gsap.to(".about-text", { x:offsetTop/3, duration: 1})
        
    })
}else{
    $(window).scroll(function(){
        offsetTop = $(window).scrollTop()
        // console.log(offsetTop/10)
        //x:“偏移”,“時間：數字越大呈現時間越久"
        gsap.to(".about-text", { y:-offsetTop/6, duration: 1})
        
    })
}
}




// 捲軸事件物體會移動
// $(window).scroll(function(){
//     offsetTop = $(window).scrollTop()
//     // console.log(offsetTop/10)
//     //x:“偏移”,“時間：數字越大呈現時間越久"
//     gsap.to(".about-text", { y:-offsetTop/2, duration: 1})
    
// })

})//end
new WOW().init();





