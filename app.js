const allBtns = document.querySelectorAll('.btn');
const clickSound = document.querySelector('audio');
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
const operators = ['/', '-', '*', '+'];

for (let i = 0; i < allBtns.length; i++) {
  allBtns[i].addEventListener('click', (e) => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
}

dotSign.addEventListener('click', (e) => {
  for (let i = 0; i < operators.length; i++) {
    if (resultContainer.innerText.includes(`${operators[i]}`)) {
      if (
        resultContainer.innerText.split(`${operators[i]}`)[1].slice(-1)
          === '.'
        || resultContainer.innerText.split(`${operators[i]}`)[1].includes('.')
      ) {
        e.stopImmediatePropagation();
      }
    }
  }
  if (resultContainer.innerText.includes('.')) {
    if (
      resultContainer.innerText.substring(
        resultContainer.innerText.indexOf('.'),
      ) === '.'
    ) {
      e.stopImmediatePropagation();
    }
  }
});

mathematicalContainer.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('math')
    && e.target.innerText !== '='
    && resultContainer.innerText.length < 15
  ) {
    resultContainer.append(e.target.innerText);
  }
});

clearContainer.addEventListener('click', (e) => {
  resultContainer.innerText = '';
});

deleteContainer.addEventListener('click', (e) => {
  if (resultContainer.innerText.length > 1) {
    slicedText = resultContainer.innerText.slice(0, -1);
  } else {
    slicedText = resultContainer.innerText.slice(0, 0);
  }
  resultContainer.innerText = slicedText;
});

plusSign.addEventListener('click', (e) => {
  if (resultContainer.innerText.includes('+')) {
    if (resultContainer.innerText.slice(-1) === '+') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('+')[0];
      const numberAfterPlus = resultContainer.innerText.split('+')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) + Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  } else if (resultContainer.innerText.includes('*')) {
    if (resultContainer.innerText.slice(-1) === '*') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('*')[0];
      const numberAfterPlus = resultContainer.innerText.split('*')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) * Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  } else if (resultContainer.innerText.includes('-')) {
    if (resultContainer.innerText.slice(-1) === '-') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('-')[0];
      const numberAfterPlus = resultContainer.innerText.split('-')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) - Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  } else if (resultContainer.innerText.includes('/')) {
    if (resultContainer.innerText.slice(-1) === '/') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('/')[0];
      const numberAfterPlus = resultContainer.innerText.split('/')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) / Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  }
  equalsSign.addEventListener('click', (e) => {
    const numberBeforePlus = resultContainer.innerText.split('+')[0];
    const numberAfterPlus = resultContainer.innerText.split('+')[1];
    resultContainer.innerText = Number(numberBeforePlus.trim()) + Number(numberAfterPlus.trim());
    if (resultContainer.innerText.length > 12) {
      resultContainer.innerText = Number(resultContainer.innerText).toFixed(5);
    } else if (
      resultContainer.innerText === 'NaN'
      || numberAfterPlus === ''
      || numberBeforePlus === ''
    ) {
      resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
    }
  });
});

multiplySign.addEventListener('click', (e) => {
  if (resultContainer.innerText.includes('*')) {
    if (resultContainer.innerText.slice(-1) === '*') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('*')[0];
      const numberAfterPlus = resultContainer.innerText.split('*')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) * Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  } else if (resultContainer.innerText.includes('-')) {
    if (resultContainer.innerText.slice(-1) === '-') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('-')[0];
      const numberAfterPlus = resultContainer.innerText.split('-')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) - Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  } else if (resultContainer.innerText.includes('/')) {
    if (resultContainer.innerText.slice(-1) === '/') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('/')[0];
      const numberAfterPlus = resultContainer.innerText.split('/')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) / Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  } else if (resultContainer.innerText.includes('+')) {
    if (resultContainer.innerText.slice(-1) === '+') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('+')[0];
      const numberAfterPlus = resultContainer.innerText.split('+')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) + Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  }
  equalsSign.addEventListener('click', (e) => {
    const numberBeforePlus = resultContainer.innerText.split('*')[0];
    const numberAfterPlus = resultContainer.innerText.split('*')[1];
    resultContainer.innerText = Number(numberBeforePlus.trim()) * Number(numberAfterPlus.trim());
    if (resultContainer.innerText.length > 12) {
      resultContainer.innerText = Number(resultContainer.innerText).toFixed(5);
    } else if (
      resultContainer.innerText === 'NaN'
      || numberAfterPlus === ''
      || numberBeforePlus === ''
    ) {
      resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
    }
  });
});

substractSign.addEventListener('click', (e) => {
  if (resultContainer.innerText.includes('-')) {
    if (resultContainer.innerText.slice(-1) === '-') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('-')[0];
      const numberAfterPlus = resultContainer.innerText.split('-')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) - Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  } else if (resultContainer.innerText.includes('/')) {
    if (resultContainer.innerText.slice(-1) === '/') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('/')[0];
      const numberAfterPlus = resultContainer.innerText.split('/')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) / Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  } else if (resultContainer.innerText.includes('+')) {
    if (resultContainer.innerText.slice(-1) === '+') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('+')[0];
      const numberAfterPlus = resultContainer.innerText.split('+')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) + Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  } else if (resultContainer.innerText.includes('*')) {
    if (resultContainer.innerText.slice(-1) === '*') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('*')[0];
      const numberAfterPlus = resultContainer.innerText.split('*')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) * Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  }
  equalsSign.addEventListener('click', (e) => {
    const numberBeforePlus = resultContainer.innerText.split('-')[0];
    const numberAfterPlus = resultContainer.innerText.split('-')[1];
    resultContainer.innerText = Number(numberBeforePlus.trim()) - Number(numberAfterPlus.trim());
    if (resultContainer.innerText.length > 12) {
      resultContainer.innerText = Number(resultContainer.innerText).toFixed(5);
    } else if (
      resultContainer.innerText === 'NaN'
      || numberAfterPlus === ''
      || numberBeforePlus === ''
    ) {
      resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
    }
  });
});

divideSign.addEventListener('click', (e) => {
  if (resultContainer.innerText.includes('/')) {
    if (resultContainer.innerText.slice(-1) === '/') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('/')[0];
      const numberAfterPlus = resultContainer.innerText.split('/')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) / Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  } else if (resultContainer.innerText.includes('+')) {
    if (resultContainer.innerText.slice(-1) === '+') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('+')[0];
      const numberAfterPlus = resultContainer.innerText.split('+')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) + Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  } else if (resultContainer.innerText.includes('*')) {
    if (resultContainer.innerText.slice(-1) === '*') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('*')[0];
      const numberAfterPlus = resultContainer.innerText.split('*')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) * Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  } else if (resultContainer.innerText.includes('-')) {
    if (resultContainer.innerText.slice(-1) === '-') {
      resultContainer.innerText = `${resultContainer.innerText.slice(0, -1)}`;
    } else {
      const numberBeforePlus = resultContainer.innerText.split('-')[0];
      const numberAfterPlus = resultContainer.innerText.split('-')[1];
      resultContainer.innerText = Number(numberBeforePlus.trim()) - Number(numberAfterPlus.trim());
      if (resultContainer.innerText.length > 12) {
        resultContainer.innerText = Number(resultContainer.innerText).toFixed(
          5,
        );
      } else if (
        resultContainer.innerText === 'NaN'
        || numberAfterPlus === ''
        || numberBeforePlus === ''
      ) {
        resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
      }
    }
  }
  equalsSign.addEventListener('click', (e) => {
    const numberBeforePlus = resultContainer.innerText.split('/')[0];
    const numberAfterPlus = resultContainer.innerText.split('/')[1];
    resultContainer.innerText = Number(numberBeforePlus.trim()) / Number(numberAfterPlus.trim());
    if (resultContainer.innerText.length > 12) {
      resultContainer.innerText = Number(resultContainer.innerText).toFixed(5);
    } else if (
      resultContainer.innerText === 'NaN'
      || numberAfterPlus === ''
      || numberBeforePlus === ''
    ) {
      resultContainer.innerText = 'Kindly press clear and make sure everything is correct!';
    }
  });
});
