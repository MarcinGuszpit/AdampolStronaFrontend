import Velocity from 'velocity-animate';

export class NavBarButton {
    constructor(settings) {
        this.button = settings.button;
        this.menu = settings.menu;
        this.slideTime = settings.slideTime || 1000;
        this.down = true;
        console.log(this.button);
        console.log(this.menu);

        this.addClickHandler();

    }

    addClickHandler() {
        this.button.addEventListener('click', () => {
            console.log('clicked');
            if (this.down) {
                Velocity(this.menu, 'slideUp', {
                    duration: 500,
                    easing: 'easeOut'
                });
                this.down = false;
            } else {
                Velocity(this.menu, 'slideDown', {
                    duration: 500,
                    easing: 'easeOut'
                });
                this.down = true;
            }

        });
    }


    // toggleMenuOnButtonPressHandler() {
    //     this.navbarBtn.addEventListener('click',  (event) => {
    //         event.stopPropagation();
    //         this.toggleMenu();
    //     });
    // }
    //
    // toggleMenu() {
    //     //animFuncs.slideToggle(menu, slideTime, 'easeOut');
    // }
    //
    // isSmallSize(size) {
    //     return (size < this.pageSmallSize);
    // }
    //
    // getSizeAndResetStyles() {
    //     const currentSize = window.outerWidth;
    //     if (this.isSmallSize(this.prevWidth) && !(this.isSmallSize(currentSize))) {
    //         this.menu.removeAttribute('style');
    //     }
    //     if (!this.isSmallSize(this.prevWidth) && (this.isSmallSize(currentSize))) {
    //         this.menu.removeAttribute('style');
    //     }
    //     return currentSize;
    // }
    //
    // toggleMenuOnBrowserResizeHandler() {
    //     window.addEventListener('resize', function () {
    //         this.prevWidth = this.getSizeAndResetStyles();
    //     });
    // }
    //
    // run() {
    //     this.toggleMenuOnBrowserResizeHandler();
    //     this.toggleMenuOnButtonPressHandler();
    // }

}