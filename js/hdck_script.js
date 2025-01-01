$(document).ready(function(){

    $(".img_title_div").addClass("show_now");

    var pd_btm  = $(".img_title_div").outerHeight() - $(".img_title_div").height();
    var de_li  = $(".design_li").outerHeight();

    var top_height = $("#gnb").outerHeight() + $("#main").outerHeight() + $("#target").outerHeight() - de_li;
    var top_height_2 = top_height + $("#img_title_1").outerHeight() + $("#content_1").outerHeight() + de_li - (pd_btm  * 2 );
    var top_height_3 = top_height_2 + $("#img_title_2").outerHeight() + $("#content_2").outerHeight() + (pd_btm  * 3 );
    var top_height_4 = top_height_3 + $("#img_title_3").outerHeight() + $("#content_3").outerHeight() + (pd_btm  * 1 );
    

    $(window).resize(function(){ 
      pd_btm  = $(".img_title_div").outerHeight() - $(".img_title_div").height();
      de_li  = $(".design_li").outerHeight();

      top_height = $("#gnb").outerHeight() + $("#main").outerHeight() + $("#target").outerHeight() - de_li;
      top_height_2 = top_height + $("#img_title_1").outerHeight() + $("#content_1").outerHeight() + de_li - (pd_btm  * 2 );
      top_height_3 = top_height_2 + $("#img_title_2").outerHeight() + $("#content_2").outerHeight() + (pd_btm  * 3 );
      top_height_4 = top_height_3 + $("#img_title_3").outerHeight() + $("#content_3").outerHeight() + (pd_btm  * 1 );
     

    });

  $(window).scroll(function(){


      if ($(this).scrollTop() > top_height) {
        
        $("#img_title_1 .img_title_div").removeClass("show_now");

      }  else {
        $("#img_title_1 .img_title_div").addClass("show_now");
      }


      if ($(this).scrollTop() > top_height_2) {
        
        $("#img_title_2 .img_title_div").removeClass("show_now");

      } else {
        $("#img_title_2 .img_title_div").addClass("show_now");

      }

      if ($(this).scrollTop() > top_height_3) {
        
        $("#img_title_3 .img_title_div").removeClass("show_now");

      } else {
        $("#img_title_3 .img_title_div").addClass("show_now");

      }

      if ($(this).scrollTop() > top_height_4) {
        
        $("#img_title_4 .img_title_div").removeClass("show_now");

      } else {
        $("#img_title_4 .img_title_div").addClass("show_now");

      }


  });



});


$(window).on("load", function() {


    // lazy loading for background images
    $(".lazy_img").removeClass("lazy_css");


});
