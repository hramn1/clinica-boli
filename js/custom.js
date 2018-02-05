"use strict";
(function () {
  var menuButton = document.querySelector(".btn--menu");
  var menuCanvas = document.querySelector(".main-menu__offcanvas");
  var feature = document.querySelectorAll(".feature__item");
  var menuClose = document.querySelector(".close-cross");
  var menuDrop = document.querySelector(".main-menu__dropdown");
  var menuShow = document.querySelector(".drop-menu");
  var menuDropTop = 0;
  var menuItems = document.querySelectorAll('.drop-menu li');
  var menuHeight = 10 + menuItems.length * 60;
  var timer;
  if (document.body.clientWidth <= 750) {
  menuDrop.addEventListener('click', function(evt){
     menuShow.classList.toggle('drop-menu__show');
     if (!menuShow.classList.contains('drop-menu__show')) {
        menuShow.style.height = 0;
        clearTimeout(timer);
        menuDropTop = 0;
     }
     else{
       var showingMenu = function(){
         if(menuDropTop < menuHeight){
          menuDropTop = menuDropTop + 5;
          menuShow.style.height = menuDropTop + 'px';
          timer = setTimeout(showingMenu, 20);
         }};
         showingMenu();
      }
  });
}
else{
  menuDrop.addEventListener('click', function(evt){
     menuHeight = menuItems.length * 35;
     menuShow.classList.toggle('drop-menu__show');
     if (!menuShow.classList.contains('drop-menu__show')) {
        menuShow.style.height = 0;
        menuShow.style.display = 'none';
        clearTimeout(timer);
        menuDropTop = 0;
     }
     else{
       var showingMenu = function(){
         if(menuDropTop < menuHeight){
          menuDropTop = menuDropTop + 10;
          menuShow.style.height = menuDropTop + 'px';
          menuShow.style.display = 'block';
          timer = setTimeout(showingMenu, 10);
         }};
         showingMenu();
      }
  });
}
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

