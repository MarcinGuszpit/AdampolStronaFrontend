import './scss/app.scss'

//js
import {ChangeClassOnEvent} from './js/changeClassOnEvent';
import {MenuItems} from "./js/menuItems";
import {NavBarButton} from "./js/navbarButton";


const changeClassOnEvent = new ChangeClassOnEvent({
    element: document.querySelector('nav.navbar'),
    breakValue: 120,
    className: 'changed'
});

changeClassOnEvent.run();

const menuItems = new MenuItems({
    menuItems: document.querySelectorAll('.navbar-menu .menu-link'),
    duration: 500,
    easing: 'easeOut'
});

const navbarButton = new NavBarButton({
    button: document.querySelector('img.menu-button'),
    menu: document.querySelector('ul.navbar-menu')
})


