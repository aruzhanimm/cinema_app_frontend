'use strict';

class BackToTop {
    constructor() {
        this.button = document.getElementById('backToTop');
        this.init();
    }

    init() {
        window.addEventListener('scroll', this.toggleButton.bind(this));
        this.button.addEventListener('click', this.scrollToTop.bind(this));
    }

    toggleButton() {
        if (window.pageYOffset > 300) {
            this.button.style.display = 'block';
        } else {
            this.button.style.display = 'none';
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BackToTop();
});