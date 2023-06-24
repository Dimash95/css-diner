import './global.css';
import './components/blog-1/blog-1';
// * Create elements

const answer = 'plate';
const table = document.querySelector('.block-one__table') as HTMLElement;
const plateOne = document.createElement('div') as HTMLElement;
const plateTwo = document.createElement('div') as HTMLElement;
plateOne.classList.add('plate');
plateTwo.classList.add('plate');
plateOne.classList.add('animation');
plateTwo.classList.add('animation');
table.appendChild(plateOne);
table.appendChild(plateTwo);

// * Add CSS content

const cssBox = document.querySelector('.block-two__code__content__css') as HTMLElement;
const cssContent = `<input class="code__content__input" type='text' placeholder="Type in a CSS selector enter" /><br />
{<br />
/* Styles would go here. */<br />
}<br />
/* <br />Type a number to skip to a level.<br />
Ex → "5" for level 5<br />
*/`;
cssBox.innerHTML = cssContent;

const htmlBox = document.querySelector('.block-three__code__content__html') as HTMLElement;
const htmlContent = `&lt;div class="table"&gt;<br />
&nbsp;&nbsp;&lt;plate /&gt;<br />
&nbsp;&nbsp;&lt;plate /&gt;<br />
&lt;/div&gt;`;
htmlBox.innerHTML = htmlContent;

// * Add HTML content

const taskBox = document.querySelector('.aside__task') as HTMLElement;
const taskContent = `<h3>Type Selector</h3>
<h4>Select elements by their type</h4>
<h2 class="tag-highlight">A</h2>
<p>
  Selects all elements of type <span class="tag-highlight">A</span>. Type refers to the type of tag, so
  <span class="tag-highlight">&lt;div&gt;</span>, <span class="tag-highlight">&lt;p&gt;</span> and
  <span class="tag-highlight">&lt;ul&gt;</span> are all different element types.
</p>
<div>
  <h4>Examples</h4>
  <p><span class="tag-highlight">p</span> selects all <span class="tag-highlight">p</span> elements.</p>
  <p><span class="tag-highlight">div</span> selects all <span class="tag-highlight">div</span> elements.</p>
</div>`;
taskBox.innerHTML = taskContent;

// ! Connect elements

// const tagPlateOne = document.querySelector('plate');
// tagPlateOne?.classList.add('.hover');

// * Level number
// TODO: change level

const blockTwoThree = document.querySelector('.container-block-two-three') as HTMLElement;
const lvlAllNum = document.querySelectorAll('.lvl__number');
lvlAllNum[0].classList.add('focus');

for (let i = 0; i < lvlAllNum.length; i += 1) {
  lvlAllNum[i].addEventListener('click', () => {
    for (let i = 0; i < lvlAllNum.length; i += 1) {
      lvlAllNum[i].classList.remove('focus');
    }
    lvlAllNum[i].classList.add('focus');
  });
}

// * Check the answer, change icon, inputValue animation

const inputValue = document.querySelector('.code__content__input') as HTMLInputElement;
const btnEnter = document.querySelector('.code__content__enter') as HTMLButtonElement;
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

// ! img doesn't show

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    if (inputValue.value === 'plate') {
      alert('win');
      blockFourIcon.src = './assets/img/green-icon.png';
    } else {
      blockTwoThree.classList.add('animation__shake');
      setTimeout(removeShake, 500);
    }
  }
});

btnEnter.addEventListener('click', () => {
  if (inputValue.value === 'plate') {
    alert('win');
    blockFourIcon.src = './assets/img/green-icon.png';
  } else {
    blockTwoThree.classList.add('animation__shake');
    setTimeout(removeShake, 500);
  }
});

// * Help

// Code was taken from:
// https://www.schoolsw3.com/howto/howto_js_typewriter.php

const help = document.querySelector('.block-one__help') as HTMLElement;
let i = 0;

help.addEventListener('click', function typeAnswer() {
  if (i < answer.length) {
    inputValue.value += answer.charAt(i);
    i++;
    setTimeout(typeAnswer, 200);
  }
});

// help.addEventListener('click', () => {
//   for (let i = 0; i < answer.length; i += 1) {
//     setTimeout((inputValue.value += answer[i]), 1000);
//   }
// });

// TODO: local storage

// TODO: start again
