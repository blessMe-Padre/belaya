export const initServices = () => {

    const servicesButtons = document.querySelectorAll('.services__button');
    const item1 = document.querySelector('.services__description-item--1');
    const item2 = document.querySelector('.services__description-item--2');

    servicesButtons.forEach((button) => {
        button.addEventListener('mouseenter', (evt) => {
            const currentButton = evt.currentTarget;

            servicesButtons.forEach((btn) => {
                btn.classList.remove('is-active');
            });

            currentButton.classList.add('is-active');

            if (currentButton === servicesButtons[0]) {
                item1.classList.remove('is-active');
                item2.classList.add('is-active');
            } else if (currentButton === servicesButtons[1]) {
                item2.classList.remove('is-active');
                item1.classList.add('is-active');
            }
        });
    });

}