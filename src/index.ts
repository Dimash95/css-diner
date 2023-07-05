import './global.css';
import { taskLevels } from './levels-library';
import { titleAndTable } from './components/title-and-table/title-and-table';
import { htmlViewer } from './components/html-viewer/html-viewer';
import { levelDescription } from './components/level-description/level-description';
import { doInputAnimation } from './components/css-editor/do-input-animation';
import { clearTextEditor } from './components//css-editor/clear-input';

doInputAnimation();

////////////////////////////////////////////////////////////////// * Init

let currentLevel = 0;
let selector: string;

function init() {
  const levelFirst = currentLevel;
  showCurrentLevel(levelFirst);
  listenToLevelNavigationButtons();
}
init();

////////////////////////////////////////////////////////////////// * localStorage

function setStorage(currentLevel: number) {
  localStorage.setItem('currentLevel', currentLevel.toString());

  getStorage();
}

function getStorage() {
  const currentLevel = +(localStorage.getItem('currentLevel') ?? 0);

  showCurrentLevel(currentLevel);
}
getStorage();

////////////////////////////////////////////////////////////////// * Show current level page

function showCurrentLevel(currentLevel: number) {
  clearTextEditor();
  changeButtonsStyle(currentLevel);
  titleAndTable(taskLevels[currentLevel].doThis, taskLevels[currentLevel].pictures);
  htmlViewer(taskLevels[currentLevel].boardMarkup);
  levelDescription(
    taskLevels[currentLevel].level,
    taskLevels[currentLevel].selectorName,
    taskLevels[currentLevel].helpTitle,
    taskLevels[currentLevel].syntax,
    taskLevels[currentLevel].help,
    taskLevels[currentLevel].example
  );
  typeCorrectSelector(taskLevels[currentLevel].selector, currentLevel);
  selector = taskLevels[currentLevel].selector;
}

////////////////////////////////////////////////////////////////// * Button style focus

function changeButtonsStyle(currentLevel: number) {
  const levelNumbers = document.querySelectorAll('.lvl__number');
  levelNumbers.forEach((button) => button.classList.remove('focus'));
  levelNumbers[currentLevel].classList.add('focus');
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    checkAnswer();
  }
});

const buttonEnter = document.querySelector('.code__content__enter') as HTMLButtonElement;
buttonEnter.addEventListener('click', () => checkAnswer());

////////////////////////////////////////////////////////////////// * Check Answer

function checkAnswer() {
  const inputValue = document.querySelector('.code__content__input') as HTMLInputElement;
  inputValue.innerHTML = '';
  inputValue.classList.remove('animation__type-text');

  const blockTwoThree = document.querySelector('.container-block-two-three') as HTMLElement;
  const levelNumbers = document.querySelectorAll('.lvl__number');

  const removeShake = (): void => {
    blockTwoThree.classList.remove('animation__shake');
  };

  if (inputValue.value === selector) {
    levelNumbers[currentLevel].classList.add('green');
    currentLevel += 1;
    if (currentLevel === 10) {
      alert('Victory!');
      return;
    } else {
      setStorage(currentLevel);
      clearTextEditor();
    }
  } else {
    blockTwoThree.classList.add('animation__shake');
    setTimeout(removeShake, 500);
  }
}
checkAnswer();

// ! Кнопка Help не правильно рисует кнопки уровней
// ! checkAnswer работает не корректно

////////////////////////////////////////////////////////////////// * Type Help

function typeCorrectSelector(selector: string, currentLevel: number) {
  const helpButton = document.querySelector('.block-one__help') as HTMLElement;
  const inputValue = document.querySelector('.code__content__input') as HTMLInputElement;
  const levelNumbers = document.querySelectorAll('.lvl__number');

  helpButton.removeEventListener('click', () => typeAnswer());
  helpButton.addEventListener('click', () => clearTextEditor());
  helpButton.addEventListener('click', () => typeAnswer());

  function typeAnswer() {
    inputValue.value = selector;
    inputValue.classList.add('animation__type-text');
    levelNumbers[currentLevel].classList.add('red');

    currentLevel += 1;
    if (currentLevel === 10) {
      setTimeout(() => alert('Victory!'), 1000);
      return;
    } else {
      setTimeout(() => setStorage(currentLevel), 5000);
    }
  }
}

////////////////////////////////////////////////////////////////// * Level buttons

function listenToLevelNavigationButtons() {
  const levelNavigationButtons = document.querySelectorAll('.lvl__number');

  levelNavigationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      setStorage(index);
      clearTextEditor();
    });
  });
}

////////////////////////////////////////////////////////////////// * Начать заново

function startNewGame() {
  const newGameButton = document.querySelector('.btn-new-game') as HTMLElement;

  newGameButton.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  });
}
startNewGame();
