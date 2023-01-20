import './scss/app.scss'

//js
import {ChangeClassOnEvent} from './js/changeClassOnEvent';

const navbarElem = document.querySelector('nav.navbar');
console.log(navbarElem);


const changeClassOnEvent = new ChangeClassOnEvent({
    element: navbarElem,
    breakValue: 200,
    className: 'changed'
});

changeClassOnEvent.run();