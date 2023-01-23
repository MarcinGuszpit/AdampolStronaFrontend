import Velocity from 'velocity-animate';

export class MenuItems {
    constructor(settings) {
        if (settings && Object.keys(settings).length > 0) {
            this.menuItems = settings.menuItems;
            this.duration = settings.duration;
            this.easing = settings.easing;
            this.addOnClickEventToMenuItems();
        }
    }

    addOnClickEventToMenuItems() {
        this.menuItems.forEach((elem) => {
            elem.addEventListener('click', (event) => {
                event.preventDefault();
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
