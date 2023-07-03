export const doInputAnimation = () => {
  const inputValue = document.querySelector('.input__container') as HTMLElement;

  const inputAnimation = (): void => {
    if (inputValue.classList.contains('input__animation')) {
      inputValue.classList.remove('input__animation');
    } else {
      inputValue.classList.add('input__animation');
    }
  };
  setInterval(inputAnimation, 500);
};
