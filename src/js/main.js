const ratingBox = document.querySelector('.box__rating');

ratingBox.addEventListener('click', (event) => {
    event.target.className.includes('btn__rating') && fnEnableRatingClass(event.target);
});

const fnEnableRatingClass = (ratingButton) => {
    const ratingBtns = ratingBox.querySelectorAll('.btn__rating');
    ratingBtns.forEach((btn) => {
        btn.classList.remove('btn__rating--active');
    });
    ratingButton.classList.add('btn__rating--active');
}