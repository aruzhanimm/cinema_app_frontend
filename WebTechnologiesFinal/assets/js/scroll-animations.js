'use strict';

class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Load AOS library dynamically
        this.loadAOS().then(() => {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100,
                easing: 'ease-out-cubic'
            });
        });
    }

    loadAOS() {
        return new Promise((resolve) => {
            if (typeof AOS !== 'undefined') {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
            script.onload = resolve;
            document.head.appendChild(script);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimations();
});