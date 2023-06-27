export function addBlockTwo(selector: string) {
  const inputValue = document.querySelector('.code__content__input') as HTMLInputElement;
  const btnEnter = document.querySelector('.code__content__enter') as HTMLButtonElement;
  const blockTwoThree = document.querySelector('.container-block-two-three') as HTMLElement;
  const blockFourIcon = document.querySelector('.block-four__icon') as HTMLImageElement;
  // let currentLevel = 0;
  console.log(selector);

  const removeShake = (): void => {
    blockTwoThree.classList.remove('animation__shake');
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputValue.value === selector) {
        // blockFourIcon.src = './assets/img/green-icon.png';
        // currentLevel += 1;
        // showCurrentLevel(currentLevel);
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
