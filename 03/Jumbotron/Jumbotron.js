$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    //add Bootstrap's scrollspy
    $('body').scrollspy({
        target: '.nav',
        offset: 160
    })

});