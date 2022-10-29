function openNav() {
    document.getElementById("navbar").style.width = "350px";
    document.getElementById("navbaropen").style.zIndex="3";
    document.body.classList.toggle("stop-scrolling");
}
  
function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("navbaropen").style.zIndex="-1";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  closeNav();
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos || currentScrollPos <= 100) {
        document.getElementById("header").style.top = "0";
        document.getElementById("header").style.backgroundColor="transparent";
        // document.getElementById("headerbg").style.zIndex="1";
      } else {
        document.getElementById("header").style.top = "-100px";
        // document.getElementById("headerbg").style.zIndex="-1";
      }
      if(currentScrollPos<=500){
        document.getElementById("header").style.backgroundColor="transparent";
      }
      else{
        document.getElementById("header").style.backgroundColor="black";
      }
      prevScrollpos = currentScrollPos;
}