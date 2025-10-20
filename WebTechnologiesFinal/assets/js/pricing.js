'use strict';

// FAQ  Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {

            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });


    const planButtons = document.querySelectorAll('.plan-btn');

    planButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const planName = this.closest('.pricing-card').querySelector('.plan-name').textContent;


            const originalText = this.innerHTML;
            this.innerHTML = '<ion-icon name="lock-closed-outline"></ion-icon> Processing...';
            this.disabled = true;


            setTimeout(() => {
                alert(`Redirecting to ${planName} subscription page...`);
                this.innerHTML = originalText;
                this.disabled = false;
            }, 1000);
        });
    });


    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });

        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
});