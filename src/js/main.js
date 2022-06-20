const ratingBox = document.querySelector('.box__rating');
const buttonSubmit = document.querySelector('.btn__submit');
const scoreHTML = document.querySelector('.box__result-score');
const firstViewBox = document.querySelector('.first-view');
const secondViewBox = document.querySelector('.second-view');
const errorBox = document.querySelector('.box__error');
let buttonIsEnabled = false;

ratingBox.addEventListener('click', (event) => {
    event.target.className.includes('btn__rating') && fnEnableRatingClass(event.target);
});

/**
 * This function is used to enable the rating class
 * @param  {HTMLtag} ratingButton
 */
const fnEnableRatingClass = (ratingButton) => {
    const ratingBtns = ratingBox.querySelectorAll('.btn__rating');
    ratingBtns.forEach((btn) => {
        btn.classList.remove('btn__rating--active');
    });
    ratingButton.classList.add('btn__rating--active');
    fnEnableSubmitBtn();
}

/**
 * This function is used to handle the submit button
 */
const fnEnableSubmitBtn = () => {
    buttonIsEnabled = true;
    buttonSubmit.removeAttribute('disabled');
}

/**
 * This function collects the rating and sends it to the second box
 */
buttonSubmit.addEventListener('click', () => {
    if( buttonIsEnabled ){
        const rating = document.querySelector('.btn__rating--active').dataset.rating;
        const classesToRemove = ['hide', 'hide-right'];
    
        scoreHTML.innerHTML = rating;
        firstViewBox.classList.add('add-slide-out');
        secondViewBox.classList.add('add-slide-in');
        secondViewBox.classList.remove(...classesToRemove);
        return;
    }
    errorBox.classList.add('show-error');
});

firstViewBox.addEventListener('animationend', () => {
    firstViewBox.classList.add('hide');
});

secondViewBox.addEventListener('animationend', () => {
    const classesToRemove = ['add-slide-in'];
    secondViewBox.classList.remove(...classesToRemove);
});