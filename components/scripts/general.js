$(window).load(function() {
    // remove loading screen
    $(".loader").fadeOut("slow");
    // animate headers
    $("#main-header").addClass("main-header-animated");
    var subs = document.getElementsByClassName("title-sub");
    for (var i = 0; i < subs.length; i++) {
        subs[i].classList.add("title-sub-animated");
        subs[i].classList.add("title-animated-" + (i + 1));
    }
});

// for displaying project modals properly
$(".modal-fullscreen").on('show.bs.modal', function () {
    setTimeout( function() {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    }, 0);
});

$(".modal-fullscreen").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
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

$( "img" ).on( "hover", function() {
  console.log("yes");
});
