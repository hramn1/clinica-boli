"use strict";
(function () {
  var menuButton = document.querySelector(".btn--menu");
  var menuCanvas = document.querySelector(".main-menu__offcanvas");
    menuButton.addEventListener('click', function(evt){
    menuCanvas.classList.add('main-menu__offcanvas--show')
    })
  }
)()

