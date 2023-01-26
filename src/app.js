import './scss/app.scss'

//js
import {ChangeClassOnEvent} from './js/changeClassOnEvent';
import {Menu} from './js/menu';
import {initMap} from './js/maps/maps';
import {ImageSlider} from "./js/imageSlider";


const changeClassOnEvent = new ChangeClassOnEvent({
    element: document.querySelector('nav.navbar'),
    breakValue: 120,
    className: 'changed'
});

changeClassOnEvent.run();

const menu = new Menu({
    menuItems: document.querySelectorAll('.navbar-menu .menu-link'),
    button: document.querySelector('img.menu-button'),
    menu: document.querySelector('ul.navbar-menu'),
    duration: 500,
    easing: 'easeOut',
    breakSize: 820
});

//initMap();

const imageSlider = new ImageSlider({
    images: document.querySelectorAll('.image-slider .image-wrapper img.image-slide'),
    thumbnails: document.querySelectorAll('.image-slider .thumbnails img.image-thumbnail'),
    buttonLeft: document.querySelector('.arrow-wrapper.left'),
    buttonRight: document.querySelector('.arrow-wrapper.right'),
    autoPlay: true,
    delay: 12000
});