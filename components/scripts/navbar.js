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
