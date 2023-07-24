"use strict";

//////////////////////////
// Modal Window
const nav = document.querySelector(".nav");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const navLinks = document.querySelector('.nav__links');

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
        dropdownContent.classList.toggle('menu-open');
        this.setAttribute(
            'aria-expanded',
            this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
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