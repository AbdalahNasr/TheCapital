$(document).ready(function () {
    $(window).scroll(function () {
        // console.log(window.scrollY);
        if (window.scrollY >= 68) {
            $('.navbar').css("position", "fixed")
        }
        else {
            $('.navbar').css("position", "static")
        }
    });
});

