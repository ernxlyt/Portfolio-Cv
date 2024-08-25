'use strict';



// funcion
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// variables del sidebar
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });