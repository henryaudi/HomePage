"use strict";

//////////////////////////
// Modal Window
const nav = document.querySelector(".nav");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const navLinks = document.querySelector('.nav__links');
const mybutton = document.getElementById("btn-back-to-top");
const wrappers = document.querySelectorAll('.section--4_project_wrapper');

//////////////////////////
// Nav handler

/** This adds the hover fading animation to the menu */
const handleHover = function (e) {
    if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img");

        siblings.forEach((el) => {
            // {this} keyword  is bound with fading param.
            if (el != link) {
                el.style.opacity = this;
            }
            logo.style.opacity = this;
        });
    }
};

// Mouse in/out and fade the logo/nav__link components accordingly.
nav.addEventListener("mouseover", handleHover.bind(0.3));
nav.addEventListener("mouseout", handleHover.bind(1));

//////////////////////////
// Dropdown handler

// Create dropdown effect for dropdownBtns.
// create callback functions for dropdownBtns array and toggle classes.
// Citation:
// Author: Ibadehin Mojeed
// Link: https://blog.logrocket.com/making-dropdown-menus-css/
dropdownBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
        const dropdownArrow = this.querySelector('.arrow');
        const dropdownContent = this.nextElementSibling;

        dropdownArrow.classList.toggle('arrow-rotate');

        // If the dropdown is currently shown, hide it
        if (dropdownContent.classList.contains('menu-open')) {
            dropdownContent.style.maxHeight = null;
            this.setAttribute('aria-expanded', 'false');
        } else {
            // If the dropdown is currently hidden, show it
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
            this.setAttribute('aria-expanded', 'true');
        }

        dropdownContent.classList.toggle('menu-open');
    });
});


//////////////////////////
// Scrolling handler

/** Scroll to the desired nav__link element */
navLinks.addEventListener('click', function(e) {
    e.preventDefault();    // Prevent redirecting the route

    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
});

/*  Back-to-top button
    src: https://mdbootstrap.com/docs/standard/extended/back-to-top/
*/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* Controls the height of section--4 height of the project body and shade */
window.onload = function() {
    wrappers.forEach(function(wrapper) {
        const project = wrapper.querySelector('.section--4_project');
        const shade = wrapper.querySelector('.section--4_shade');

        shade.style.height = getComputedStyle(project).height;
    });
};