const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');

const slidesCount = mainSlide.querySelectorAll('div').length;
// second way to get slidesCount is below
// const slidesCount = document.querySelectorAll('.main-slide div').length;

let activeSlidesIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});


function changeSlide(direction) {
    if (direction === 'up') {
        activeSlidesIndex++;
        if (activeSlidesIndex === slidesCount) {
            activeSlidesIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlidesIndex--;
        if (activeSlidesIndex < 0) {
            activeSlidesIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${height * activeSlidesIndex}px)`
    sidebar.style.transform = `translateY(${height * activeSlidesIndex}px)`

}
