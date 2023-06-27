export const doInputAnimation = () => {
  const inputValue = document.querySelector('.code__content__input') as HTMLInputElement;

  const inputAnimation = (): void => {
    if (inputValue.classList.contains('input__animation')) {
      inputValue.classList.remove('input__animation');
    } else {
      inputValue.classList.add('input__animation');
    }
  };
  setInterval(inputAnimation, 500);
};
