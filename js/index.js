window.addEventListener('DOMContentLoaded', () => {
    const arrowTel = document.querySelector('.header__arrow');
    const arrowTelephone = document.querySelector('.header__arrow-one');
    const arrowTelephoneHidden = document.querySelector('.header__arrow-two');
    const telephoneHeader = document.querySelector('.header__number-two');

    arrowTel.addEventListener('click', (e) => {
        const target = e.target.closest('.header__arrow-one');
        const targetTwo = e.target.closest('.header__arrow-two');

        if (target) {
            telephoneHeader.style.display = 'block';
            arrowTelephone.style.display = 'none';
            arrowTelephoneHidden.style.display = 'block';
        }

        if (targetTwo) {
            telephoneHeader.style.display = 'none';
            arrowTelephone.style.display = 'block';
            arrowTelephoneHidden.style.display = 'none';
        }
    })
    const swiper = new Swiper('.hero__slider', {
        // Optional parameters
        
        loop: true,
        spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
      
        // If we need pagination
        pagination: {
          el: '.hero__pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.hero__arrow-next',
          prevEl: '.hero__arrow-prev',
        },
      });
})