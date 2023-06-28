import './global.css';
import { taskLevels } from './levels-library';
import { addBlockOne } from './components/block-1';
import { addBlockThree } from './components/block-3';
import { addBlockFour } from './components/block-4/block-4';
import { doInputAnimation } from './components/block-2/do-input-animation';
import { clearTextEditor } from './components/block-2/clear-input';

doInputAnimation();

function init() {
  showCurrentLevel(0);
  listenToLevelNavigationButtons();
}
init();

function setStorage(currentLevel: number) {
  localStorage.setItem('currentLevel', currentLevel.toString());

  getStorage();
}

function getStorage() {
  const currentLevel = +(localStorage.getItem('currentLevel') ?? 0);
  showCurrentLevel(currentLevel);
}
getStorage();

function showCurrentLevel(currentLevel: number) {
  clearTextEditor();
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

  const removeShake = (): void => {
    blockTwoThree.classList.remove('animation__shake');
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputValue.value === selector) {
        levelNumbers[currentLevel].classList.add('green');
        console.log(levelNumbers);

        currentLevel += 1;
        if (currentLevel === 10) {
          alert('Victory!');
          return;
        }

        setStorage(currentLevel);
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

      currentLevel += 1;
      if (currentLevel === 10) {
        alert('Victory!');
        return;
      }

      setStorage(currentLevel);
      clearTextEditor();
    } else {
      blockTwoThree.classList.add('animation__shake');
      setTimeout(removeShake, 500);
    }
  });
}

// ! Кнопка Help не правильно рисует кнопки уровней
// ! Эффектом печати текста

function typeCorrectSelector(selector: string, currentLevel: number) {
  const helpButton = document.querySelector('.block-one__help') as HTMLElement;
  const inputValue = document.querySelector('.code__content__input') as HTMLInputElement;
  const levelNumbers = document.querySelectorAll('.lvl__number');
  console.log(selector);
  helpButton.addEventListener('click', () => clearTextEditor());

  function typeAnswer() {
    for (let i = 0; i < selector.length; i++) {
      inputValue.value += selector[i];
    }

    levelNumbers[currentLevel].classList.add('red');

    currentLevel += 1;
    if (currentLevel === 10) {
      setTimeout(() => alert('Victory!'), 1000);
      return;
    } else {
      setTimeout(() => setStorage(currentLevel), 2000);
    }
  }

  helpButton.addEventListener('click', () => typeAnswer());
  helpButton.removeEventListener('click', () => typeAnswer());
}

function listenToLevelNavigationButtons() {
  const levelNavigationButtons = document.querySelectorAll('.lvl__number');

  levelNavigationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      setStorage(index);
      clearTextEditor();
    });
  });
}

function startNewGame() {
  const newGameButton = document.querySelector('.btn-new-game') as HTMLElement;

  newGameButton.addEventListener('click', () => {
    localStorage.clear();
    showCurrentLevel(0);
  });
}
startNewGame();
