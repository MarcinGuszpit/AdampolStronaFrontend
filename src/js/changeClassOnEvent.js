export class ChangeClassOnEvent {

    // var pageSmallSize = settings.pageSmallSize || 0;
    // var pixelsToChangeBig = settings.pixelsChangeBig;
    // var pixelsToChangeSmall = settings.pixelsChangeSmall;
    // var classToChange = settings.classToChange;

    constructor(settings) {
        if (settings && Object.keys(settings).length > 0) {
            console.log('has settings');
            this.element = settings.element;
            this.breakValue = settings.breakValue;
            this.className = settings.className;
        }
        this.previousScroll = 0;
    }

    changeNavbarStyle() {
        const scrollTop = window.scrollY;
        if (!((scrollTop < this.breakValue && this.previousScroll < this.breakValue) ||
            ((scrollTop > this.breakValue && this.previousScroll > this.breakValue)))) {
            if (scrollTop > this.breakValue) {
                this.element.classList.add(this.className);
            } else {
                this.element.classList.remove(this.className);
            }
        }
        this.previousScroll = scrollTop;
    }

    setStyle() {
        this.changeNavbarStyle(this.breakValue);
    }

    run() {
        this.addEventHandlerOnScroll();
    }

    addEventHandlerOnScroll() {
        window.addEventListener('scroll', () => {
            this.setStyle();
        });
    }


}