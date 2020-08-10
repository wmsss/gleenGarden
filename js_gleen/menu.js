$(function(){
    $(".menu-trigger").on("click", function(){
        console.log("hi");
        $(".menu-trigger").toggleClass("active");
    });
});