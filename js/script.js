// JavaScript Document

$(function () {
  $(".navToggle").click(function(){
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".globalMenuSp").addClass("active");
    } else {
      $(".globalMenuSp").removeClass("active");
    }
  });

  $("#menu a[href]").on("click", function(event){
    $(".navToggle").trigger("click");
  });

  $(".arrow").on("click", function(){
    var position = $(".main-container:eq(0)").offset().top;
    $("html, body").animate({scrollTop:position},200);
  });
});
