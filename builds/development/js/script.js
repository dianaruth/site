$(window).load(function() {
    $(".loader").fadeOut("slow");
    // add animation classes here
});

$("#navbar-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 50
    }, 1000);
});

$("#navbar-projects").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top - 50
    }, 1000);
});

$("#navbar-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 50
    }, 1000);
});

$('.navbar').on('activate.bs.scrollspy', function () {
    if ($("#navbar-about").hasClass("active")) {
        $("#about").addClass("animating");
    }
})

