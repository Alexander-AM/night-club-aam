"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var curPath = location.pathname;
  var links = document.querySelectorAll("nav a");

  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href").startsWith(curPath)) {
      links[i].classList.add("active");
      break;
    }
  }
});