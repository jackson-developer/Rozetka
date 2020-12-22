$(function () {
  $("body").on("mouseover", function (e) {
    if ($(e.target).parent().hasClass("nav") == true || $(e.target).parents().find(".nav") == true) {
      $(".sub-nav").show();
        $(".nav-item").on("mouseover", function(e){
            if($(e.target)[0].tagName === "A"){
                $(".sub-nav").html($(e.target).parent().find(".children").html())
            }
        });
    }
    $(".sub-nav").on("mouseleave", function(e){
        $(this).hide();
    });
  });
})
