$(function () {
    var select = "all";

    function filterSelection() {
        console.log(select);
        if (select == "all") {
            $(".set").css("animation-name", "aniIn");
        } else {
            $("." + select).css("animation-name", "aniIn");
        }

        if (select == "special") {
            $(".misu").css("animation-name", "aniOut");
            $(".nube").css("animation-name", "aniOut");
            $(".coffee").css("animation-name", "aniOut");
        }
        if (select == "misu") {
            $(".special").css("animation-name", "aniOut");
            $(".nube").css("animation-name", "aniOut");
            $(".coffee").css("animation-name", "aniOut");
        }
        if (select == "nube") {
            $(".special").css("animation-name", "aniOut");
            $(".misu").css("animation-name", "aniOut");
            $(".coffee").css("animation-name", "aniOut");
        }
        if (select == "coffee") {
            $(".special").css("animation-name", "aniOut");
            $(".misu").css("animation-name", "aniOut");
            $(".nube").css("animation-name", "aniOut");
        }
        buttonSet();
    }

    function buttonSet() {
        $(".btn").css("background", "#f1f1f1");
        $(".btn").css("color", "black");
        $("#" + select).css("background", "#567836");
        $("#" + select).css("color", "white");
    }
    
    $(".btn").on("click", function () {
        //console.log(this.id);
        select = this.id;
        filterSelection();
    });

    $(".set").on("click", function (e) {
        //console.log("dddddd");
        //console.log($("#set1").prop("class"));
        //console.log($(".set").prop("class"));
        //console.log(this.id);
        //console.log($("#"+this.id).prop("class"));
       // console.log($("#"+this.id).prop("class").slice(4,40));
        //select = $("#" + this.id).prop("class").slice(4, 40);
    });

    filterSelection();
});