export class ImageSlider {
    constructor(settings) {
        this.delay = settings.delay;
        this.autoPlay = settings.autoPlay;
        this.images = settings.images;
        this.thumbnails = settings.thumbnails;
        this.buttonLeft = settings.buttonLeft;
        this.buttonRight = settings.buttonRight;

        this.currentElem = 0;

        this.selectThumbnailAndImage(this.currentElem)

        this.setLeftButtonListener();
        this.setRightButtonListener();
        this.addThumbnailsListeners();
        this.autoChangeNextImage();

    }

    findNextElem() {
        if (this.currentElem < this.images.length - 1) {
            return this.currentElem + 1;
        } else {
            return 0;
        }
    }

    findPreviousElem() {
        if (this.currentElem > 0) {
            return this.currentElem - 1;
        } else {
            return this.images.length - 1;
        }
    }

    autoChangeNextImage() {
        if (this.autoPlay) {
            clearTimeout(this.timeOutId);
            this.timeOutId = setTimeout(() => {
                this.changeThumbnailAndImage(this.findNextElem());
                this.autoChangeNextImage();
            }, this.delay);
        }
    }

    unselectThumbnailAndImage(id) {
        this.thumbnails[id].classList.remove('selected');
        this.images[id].classList.remove('show');
    }

    selectThumbnailAndImage(id) {
        this.thumbnails[id].classList.add('selected');
        this.images[id].classList.add('show');
    }

    changeThumbnailAndImage(id) {
        this.unselectThumbnailAndImage(this.currentElem);
        this.currentElem = id;
        this.selectThumbnailAndImage(this.currentElem);
    }

    addThumbnailsListeners() {
        this.thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                this.changeThumbnailAndImage(index);
                this.autoChangeNextImage();
            });
        });
    }

    setRightButtonListener() {
        this.buttonRight.addEventListener('click', (event) => {
            event.stopPropagation();
            this.changeThumbnailAndImage(this.findNextElem());
            this.autoChangeNextImage();
        });
    }

    setLeftButtonListener() {
        this.buttonLeft.addEventListener('click', (event) => {
            event.stopPropagation();
            this.changeThumbnailAndImage(this.findPreviousElem());
            this.autoChangeNextImage();
        });
    }

}