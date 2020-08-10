$(function () {
    function openNav() {
        document.getElementById("mySidebar").style.width = "180px";
        document.getElementById("main").style.marginLeft = "0px";
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
});