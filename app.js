const allBtns = document.querySelectorAll('.btn');
const clickSound = document.querySelector('audio');
const numberOne = document.querySelector('#one');
const numberTwo = document.querySelector('#two');
const numberThree = document.querySelector('#three');
const numberFour = document.querySelector('#four');
const numberFive = document.querySelector('#five');
const numberSix = document.querySelector('#six');
const numberSeven = document.querySelector('#seven');
const numberEight = document.querySelector('#eight');
const multiplySign = document.querySelector('#multiply');
const divideSign = document.querySelector('#divide');
const dotSign = document.querySelector('#dot');
const plusSign = document.querySelector('#plus');
const substractSign = document.querySelector('#substract');
const equalsSign = document.querySelector('#equals');
const resultContainer = document.querySelector('.result-container');
const clearContainer = document.querySelector('.clear-container');
const resultDiv = document.querySelector('.hidden-div');
const mathematicalContainer = document.querySelector('.mathematical-container');
const deleteContainer = document.querySelector('.delete-container');
let slicedText;


for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click', e => {
        clickSound.currentTime = 0;
        clickSound.play();
    })
}


mathematicalContainer.addEventListener('click', e => {
    if (e.target.classList.contains('math') && e.target.innerText !== '='){
        resultContainer.append(e.target.innerText)
    }
})

clearContainer.addEventListener('click', e => {
    resultContainer.innerText = null;
})

deleteContainer.addEventListener('click', (e) => {
    if(resultContainer.innerText.length > 1){
        slicedText = resultContainer.innerText.slice(0,-1);
    }
    else {
        slicedText = resultContainer.innerText.slice(0,0);    
    }
    resultContainer.innerText = slicedText;
});

