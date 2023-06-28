import './global.css';
import { taskLevels } from './levels-library';
import { addBlockOne } from './components/block-1';
import { addBlockThree } from './components/block-3';
import { addBlockFour } from './components/block-4/block-4';
import { doInputAnimation } from './components/block-2/do-input-animation';
import { clearTextEditor } from './components/block-2/clear-input';

doInputAnimation();

const currentLevel = 0;

function init(currentLevel: number) {
  showCurrentLevel(currentLevel);
  listenToLevelNavigationButtons();
}
init(currentLevel);

function showCurrentLevel(currentLevel: number) {
  changeButtonsStyle(currentLevel);
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
  typeCorrectSelector(taskLevels[currentLevel].selector, currentLevel);
}

function changeButtonsStyle(currentLevel: number) {
  const levelNumbers = document.querySelectorAll('.lvl__number');
  levelNumbers.forEach((button) => button.classList.remove('focus'));
  levelNumbers[currentLevel].classList.add('focus');
}

function checkAnswer(selector: string, currentLevel: number) {
  const inputValue = document.querySelector('.code__content__input') as HTMLInputElement;
  inputValue.innerHTML = '';

  const buttonEnter = document.querySelector('.code__content__enter') as HTMLButtonElement;
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

        currentLevel += 1;
        if (currentLevel === 10) {
          alert('Win!');
          return;
        }
        showCurrentLevel(currentLevel);
        clearTextEditor();
      } else {
        blockTwoThree.classList.add('animation__shake');
        setTimeout(removeShake, 500);
      }
    }
  });

  buttonEnter.addEventListener('click', () => {
    if (inputValue.value === selector) {
      levelNumbers[currentLevel].classList.add('green');

      alert('win');

      currentLevel += 1;
      showCurrentLevel(currentLevel);

      clearTextEditor();
    } else {
      blockTwoThree.classList.add('animation__shake');
      setTimeout(removeShake, 500);
    }
  });
}

// Code was taken from:
// https://www.schoolsw3.com/howto/howto_js_typewriter.php

function typeCorrectSelector(selector: string, currentLevel: number) {
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
    currentLevel += 1;
    showCurrentLevel(currentLevel);
  });
}

function listenToLevelNavigationButtons() {
  const levelNavigationButtons = document.querySelectorAll('.lvl__number');

  levelNavigationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      showCurrentLevel(index);
      clearTextEditor();
    });
  });
}

// TODO: local storage

// TODO: start again
