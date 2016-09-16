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
