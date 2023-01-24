import Velocity from 'velocity-animate';

export class Menu {
    constructor(settings) {
        if (settings && Object.keys(settings).length > 0) {
            this.menuItems = settings.menuItems;
            this.duration = settings.duration;
            this.easing = settings.easing;
            this.button = settings.button;
            this.menu = settings.menu;
            this.breakSize = settings.breakSize;

            this.currentWindowWidth = window.outerWidth;
            this.down = false;

            this.addOnClickEventToMenuItems();
            this.addWindowChangeSizeEvent();
            this.addClickHandler();

        }
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


    isSmallSize(size) {
        return (size < this.breakSize);
    }

    getSizeAndResetStyles() {
        const newSize = window.outerWidth;
        if (this.isSmallSize(this.currentWindowWidth) && !(this.isSmallSize(newSize))) {
            this.menu.removeAttribute('style');
            this.down = false;
        }
        if (!this.isSmallSize(this.currentWindowWidth) && (this.isSmallSize(newSize))) {
            this.menu.removeAttribute('style');
            this.down = false;
        }
        return newSize;
    }


    addWindowChangeSizeEvent() {
        window.addEventListener('resize', () => {
            this.currentWindowWidth = this.getSizeAndResetStyles();
        })
    }

    addOnClickEventToMenuItems() {
        this.menuItems.forEach((elem) => {
            elem.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();

                if (this.isSmallSize(this.currentWindowWidth)) {
                    Velocity(this.menu, 'slideUp', {
                        duration: 800,
                        easing: 'easeOut'
                    });
                    this.down = false;
                }

                const targetElement = event.target.getAttribute('data-link-to');
                const query = `[data-link='${targetElement}']`;
                const elem = document.querySelector(query);
                if (elem) {
                    Velocity(elem, 'scroll', {
                        duration: this.duration,
                        easing: this.easing,
                        offset: -60
                    });
                }
            });
        })
    }

}