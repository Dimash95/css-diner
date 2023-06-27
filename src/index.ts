import './global.css';
import { taskLevels } from './levels-library';
import { addBlockOne } from './components/block-1';
import { addBlockThree } from './components/block-3';
import { addBlockFour } from './components/block-4';
import { doInputAnimation } from './components/block-2/do-input-animation';

doInputAnimation();

const currentLevel = 0;

function init(currentLevel: number) {
  showCurrentLevel(currentLevel);
}
init(currentLevel);

function showCurrentLevel(currentLevel: number) {
  const levelNumbers = document.querySelectorAll('.lvl__number');

  for (let i = 0; i < levelNumbers.length; i += 1) {
    levelNumbers[i].classList.remove('focus');
  }
  levelNumbers[currentLevel].classList.add('focus');

  addBlockOne(taskLevels[currentLevel].doThis, taskLevels[currentLevel].pictures);
  checkAnswer(taskLevels[currentLevel].selector, currentLevel);
  addBlockThree(taskLevels[currentLevel].boardMarkup);
  addBlockFour(
    taskLevels[currentLevel].level,
    taskLevels[currentLevel].selectorName,
    taskLevels[currentLevel].helpTitle,
    taskLevels[currentLevel].syntax,
    taskLevels[currentLevel].help,
    taskLevels[currentLevel].example
  );
  typeCorrectSelector(taskLevels[currentLevel].selector);
  changeLevel(currentLevel);
}

function checkAnswer(selector: string, currentLevel: number) {
  const inputValue = document.querySelector('.code__content__input') as HTMLInputElement;
  inputValue.innerHTML = '';
  const btnEnter = document.querySelector('.code__content__enter') as HTMLButtonElement;
  const blockTwoThree = document.querySelector('.container-block-two-three') as HTMLElement;
  const levelNumbers = document.querySelectorAll('.lvl__number');

  console.log(selector);

  const removeShake = (): void => {
    blockTwoThree.classList.remove('animation__shake');
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputValue.value === selector) {
        levelNumbers[currentLevel].classList.add('green');

        inputValue.value = '';
        currentLevel += 1;
        if (currentLevel === 10) {
          alert('Win!');
          return;
        }
        showCurrentLevel(currentLevel);
      } else {
        blockTwoThree.classList.add('animation__shake');
        setTimeout(removeShake, 500);
      }
    }
  });

  btnEnter.addEventListener('click', () => {
    if (inputValue.value === selector) {
      inputValue.value = '';
      levelNumbers[currentLevel].classList.add('green');

      alert('win');
      currentLevel += 1;
      showCurrentLevel(currentLevel);
    } else {
      blockTwoThree.classList.add('animation__shake');
      setTimeout(removeShake, 500);
    }
  });
}

// Code was taken from:
// https://www.schoolsw3.com/howto/howto_js_typewriter.php

function typeCorrectSelector(selector: string) {
  const inputValue = document.querySelector('.code__content__input') as HTMLInputElement;
  const levelNumbers = document.querySelectorAll('.lvl__number');

  const helpBtn = document.querySelector('.block-one__help') as HTMLElement;
  let i = 0;

  helpBtn.addEventListener('click', function typeAnswer() {
    if (i < selector.length) {
      inputValue.value += selector.charAt(i);
      i++;
      setTimeout(typeAnswer, 200);
    }

    levelNumbers[currentLevel].classList.add('red');
  });
}

function changeLevel(currentLevel: number) {
  const levelNumbers = document.querySelectorAll('.lvl__number');

  for (let i = 0; i < levelNumbers.length; i += 1) {
    levelNumbers[i].addEventListener('click', () => {
      const inputValue = document.querySelector('.code__content__input') as HTMLInputElement;
      inputValue.value = '';
      currentLevel = i;
      showCurrentLevel(currentLevel);
    });
  }
}

// TODO: local storage

// TODO: start again
