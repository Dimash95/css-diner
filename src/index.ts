import './global.css';
import { taskLevels } from './levels';

// * Create elements

// const blockTwoThree = document.querySelector('.container-block-two-three') as HTMLElement;
const levelNumbers = document.querySelectorAll('.lvl__number');
levelNumbers[0].classList.add('focus');
const taskTitle = document.querySelector('.block-one__title') as HTMLElement;

const currentLevel = 0;
const init = (currentLevel: number) => {
  levelNumbers[currentLevel].classList.add('focus');
  blockOne(taskLevels[currentLevel].doThis, taskLevels[currentLevel].pictures);
};
init(currentLevel);

function changeLevel() {
  for (let i = 0; i < levelNumbers.length; i += 1) {
    levelNumbers[i].addEventListener('click', () => {
      for (let i = 0; i < levelNumbers.length; i += 1) {
        levelNumbers[i].classList.remove('focus');
      }
      levelNumbers[i].classList.add('focus');
      blockOne(taskLevels[i].doThis, taskLevels[i].pictures);
      blockTwo(taskLevels[i].selector);
      blockThree(taskLevels[i].boardMarkup);
      blockFour(
        taskLevels[i].selectorName,
        taskLevels[i].helpTitle,
        taskLevels[i].syntax,
        taskLevels[i].help,
        taskLevels[i].example
      );
    });
  }
}
changeLevel();

function blockOne(doThis: string, pictures: string | undefined) {
  taskTitle.innerHTML = doThis;
  const table = document.querySelector('.block-one__table') as HTMLElement;
  if (pictures) {
    table.innerHTML = pictures;
  }
}

function blockTwo(selector: string) {
  const inputValue = document.querySelector('.code__content__input') as HTMLInputElement;
  const btnEnter = document.querySelector('.code__content__enter') as HTMLButtonElement;
  const blockTwoThree = document.querySelector('.container-block-two-three') as HTMLElement;
  const blockFourIcon = document.querySelector('.block-four__icon') as HTMLImageElement;

  const inputAnimation = (): void => {
    if (inputValue.classList.contains('input__animation')) {
      inputValue.classList.remove('input__animation');
    } else {
      inputValue.classList.add('input__animation');
    }
  };

  setInterval(inputAnimation, 500);

  const removeShake = (): void => {
    blockTwoThree.classList.remove('animation__shake');
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputValue.value === selector) {
        alert('win');
        blockFourIcon.src = './assets/img/green-icon.png';
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

function blockThree(boardMarkup: string) {
  const boardMarkupValue = document.querySelector('.boardMarkup') as HTMLDivElement;
  let text = '';
  const array = boardMarkup.split('');
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === '<') {
      array[i] = '&lt;';
      text += array[i];
    } else if (array[i] === '>') {
      array[i] = '&gt;';
      text += array[i];
    } else {
      text += array[i];
    }
  }
  boardMarkupValue.innerHTML = text;
}

function blockFour(
  levelSelectorName: string,
  levelHelpTitle: string,
  levelSyntax: string,
  levelHelp: string,
  levelExample: string
) {
  const selectorName = document.querySelector('.selector-name') as HTMLElement;
  selectorName.innerHTML = levelSelectorName;
  const helpTitle = document.querySelector('.help-title') as HTMLElement;
  helpTitle.innerHTML = levelHelpTitle;
  const syntax = document.querySelector('.syntax') as HTMLElement;
  syntax.innerHTML = levelSyntax;
  const help = document.querySelector('.help') as HTMLElement;
  help.innerHTML = levelHelp;
  const exampleContent = document.querySelector('.example-content') as HTMLElement;
  exampleContent.innerHTML = levelExample;
}
// const answer = 'plate';
// const table = document.querySelector('.block-one__table') as HTMLElement;
// const plateOne = document.createElement('div') as HTMLElement;
// const plateTwo = document.createElement('div') as HTMLElement;
// plateOne.classList.add('plate');
// plateTwo.classList.add('plate');
// plateOne.classList.add('animation');
// plateTwo.classList.add('animation');
// table.appendChild(plateOne);
// table.appendChild(plateTwo);

// // * Add CSS content

// const cssBox = document.querySelector('.block-two__code__content__css') as HTMLElement;
// const cssContent = `<input class="code__content__input" type='text' placeholder="Type in a CSS selector enter" /><br />
// {<br />
// /* Styles would go here. */<br />
// }<br />
// /* <br />Type a number to skip to a level.<br />
// Ex → "5" for level 5<br />
// */`;
// cssBox.innerHTML = cssContent;

// const htmlBox = document.querySelector('.block-three__code__content__html') as HTMLElement;
// const htmlContent = `&lt;div class="table"&gt;<br />
// &nbsp;&nbsp;&lt;plate /&gt;<br />
// &nbsp;&nbsp;&lt;plate /&gt;<br />
// &lt;/div&gt;`;
// htmlBox.innerHTML = htmlContent;

// // * Help

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
