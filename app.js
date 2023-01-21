const allBtns = document.querySelectorAll('.btn');
const clickSound = document.querySelector('audio')


for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click', e => {
        clickSound.currentTime = 0;
        clickSound.play();
    })
}
