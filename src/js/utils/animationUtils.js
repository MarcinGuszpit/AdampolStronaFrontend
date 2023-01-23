import Velocity from 'velocity-animate';


export function doSlideAnimation(elem, animation, slideTime, easing) {
    Velocity(elem, animation, {
        duration: slideTime,
        easing: easing
    });
}

export function scrollTo(elem, time, easing) {
    Velocity(elem, 'scroll', {
        duration: time,
        easing: easing
    });
}

// function isShown(elem) {
//     if ((elem.hasAttribute('style')) &&
//         (elem.getAttribute('style').indexOf(isShownString) >= 0)) {
//         return true;
//     }
//     return false;
// }

// function slideToggle(elem, time, ease) {
//     if (isShown(elem)) {
//         doSlideAnimation(elem, 'slideUp', time, ease);
//     }
//     else {
//         doSlideAnimation(elem, 'slideDown', time, ease);
//     }
// }

// function animateProgress(elem, time, ease, precentage) {
//     elem.style.width = 0;
//     velocity(elem, {
//         width: precentage
//     }, {
//         duration: time,
//         easing: ease
//     });
// }