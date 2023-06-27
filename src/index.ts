import './global.css';
import { taskLevels } from './levels-library';
import { addBlockOne } from './components/block-1';
// import { addBlockTwo } from './components/block-2';
import { addBlockThree } from './components/block-3';
import { addBlockFour } from './components/block-4';
import { doInputAnimation } from './functions/do-input-animation';

doInputAnimation();

let currentLevel = 0;

const showCurrentLevel = (currentLevel: number | 0) => {
  const inputValue = document.querySelector('.code__content__input') as HTMLInputElement;
  inputValue.innerHTML = '';
  const levelNumbers = document.querySelectorAll('.lvl__number');

  for (let i = 0; i < levelNumbers.length; i += 1) {
    levelNumbers[i].classList.remove('focus');
  }
  levelNumbers[currentLevel].classList.add('focus');

  addBlockOne(taskLevels[currentLevel].doThis, taskLevels[currentLevel].pictures);
  checkAnswer(taskLevels[currentLevel].selector);
  addBlockThree(taskLevels[currentLevel].boardMarkup);
  addBlockFour(
    taskLevels[currentLevel].selectorName,
    taskLevels[currentLevel].helpTitle,
    taskLevels[currentLevel].syntax,
    taskLevels[currentLevel].help,
    taskLevels[currentLevel].example
  );
};
showCurrentLevel(currentLevel);

export function checkAnswer(selector: string) {
  const inputValue = document.querySelector('.code__content__input') as HTMLInputElement;
  inputValue.innerHTML = '';
  const btnEnter = document.querySelector('.code__content__enter') as HTMLButtonElement;
  const blockTwoThree = document.querySelector('.container-block-two-three') as HTMLElement;
  const blockFourIcon = document.querySelector('.block-four__icon') as HTMLImageElement;
  let currentLevel = 0;
  console.log(selector);

  const removeShake = (): void => {
    blockTwoThree.classList.remove('animation__shake');
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputValue.value === selector) {
        // blockFourIcon.src = './assets/img/green-icon.png';
        inputValue.value = '';
        alert('win!');
        currentLevel += 1;
        showCurrentLevel(currentLevel);
      } else {
        blockTwoThree.classList.add('animation__shake');
        setTimeout(removeShake, 500);
      }
    }
  });

  btnEnter.addEventListener('click', () => {
    if (inputValue.value === selector) {
      alert('win');
      blockFourIcon.src = './assets/img/green-icon.png';
    } else {
      blockTwoThree.classList.add('animation__shake');
      setTimeout(removeShake, 500);
    }
  });
}

function changeLevel() {
  const levelNumbers = document.querySelectorAll('.lvl__number');

  for (let i = 0; i < levelNumbers.length; i += 1) {
    levelNumbers[i].addEventListener('click', () => {
      for (let i = 0; i < levelNumbers.length; i += 1) {
        levelNumbers[i].classList.remove('focus');
      }
      levelNumbers[i].classList.add('focus');
      const inputValue = document.querySelector('.code__content__input') as HTMLInputElement;
      inputValue.innerHTML = '';
      currentLevel = i;
      showCurrentLevel(currentLevel);
    });
  }
}
changeLevel();

// // Code was taken from:
// // https://www.schoolsw3.com/howto/howto_js_typewriter.php

// const help = document.querySelector('.block-one__help') as HTMLElement;
// let i = 0;

// help.addEventListener('click', function typeAnswer() {
//   if (i < answer.length) {
//     inputValue.value += answer.charAt(i);
//     i++;
//     setTimeout(typeAnswer, 200);
//   }
// });

// // TODO: local storage

// // TODO: start again
