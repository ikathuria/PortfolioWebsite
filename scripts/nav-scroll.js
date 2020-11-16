// navbar scroll

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("changenav").style.padding = "10px";
        document.getElementById("logo").style.fontSize = "25px";

    } else {
        document.getElementById("changenav").style.padding = "70px 10px";
    }

}


$(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
        $('#changenav').addClass('floatingNav');
        $('#changenav').addClass('navbar-dark');
        $('#changenav').removeClass('navbar-light');

    } else {
        $('#changenav').removeClass('floatingNav');
        $('#changenav').removeClass('navbar-dark');
        $('#changenav').addClass('navbar-light');
    }

});
