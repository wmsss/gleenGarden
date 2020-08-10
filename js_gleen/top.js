$(function () {
    $("#m_top").css("opacity", "0");

    $(window).on("scroll", function () {
        console.log($(window).scrollTop());
        //만약에 스크롤이 800이상 커지면 #top이 나타내주고, 아니면 안보이게 하시오.
        if ($(window).scrollTop() > 150) {
            $("#m_top").css("opacity", "1");
        } else {
            $("#m_top").css("opacity", "0");
        }
    });

});

$(function () {
    $("top").css("opacity", "0");

    $(window).on("scroll", function () {
        console.log($(window).scrollTop());
        //만약에 스크롤이 800이상 커지면 #top이 나타내주고, 아니면 안보이게 하시오.
        if ($(window).scrollTop() > 800) {
            $("#top").css("opacity", "1");
        } else {
            $("#top").css("opacity", "0");
        }
    });

});

