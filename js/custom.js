"use strict";
(function () {
  var menuButton = document.querySelector(".btn--menu");
  var menuCanvas = document.querySelector(".main-menu__offcanvas");
  var feature = document.querySelectorAll(".feature__item");
  var menuClose = document.querySelector(".close-cross");
  var menuDrop = document.querySelector(".main-menu__dropdown");
  var menuShow = document.querySelector(".drop-menu");
  var menuDropTop = 0;
  var timer;
  menuDrop.addEventListener('mouseover', function(evt){
     
      var showingMenu = function(){
        if(menuDropTop < 100){
          menuDropTop = menuDropTop + 5;
      menuShow.style.height = menuDropTop + 'px';
      timer = setTimeout(showingMenu, 20);
      console.log(menuDropTop);
      }};
      showingMenu();
       
  });
  menuDrop.addEventListener('mouseout', function(evt){
    menuShow.style.height = 0;
    menuDropTop = 0;
    //clearTimeout(timer);
  });
  menuButton.addEventListener('click', function(evt){
    menuCanvas.classList.add('main-menu__offcanvas--show');
  });
  menuClose.addEventListener('click', function(evt){
    menuCanvas.classList.remove('main-menu__offcanvas--show');
  });
  window.addEventListener('keydown', function(evt){
    if(evt.keyCode == 27){
      if(menuCanvas.classList.contains('main-menu__offcanvas--show')){
        menuCanvas.classList.remove('main-menu__offcanvas--show');
      }
    }
  });
  window.addEventListener('scroll', function(evt){
    var scrollPage = window.pageYOffset;
    var scrollHeightPage = document.documentElement.scrollHeight;
    if(scrollPage * 2.6  > scrollHeightPage){
      for(var i = 0;i<feature.length;i++){
        feature[i].classList.add('feature__item--show');
      }
    }
  });
})();

