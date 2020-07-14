
// navbar scroll

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    document.getElementById("changenav").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  }
  else {
    document.getElementById("changenav").style.padding = "70px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}


$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('#changenav').addClass('floatingNav');
    } else {
        $('#changenav').removeClass('floatingNav');
    }
});
