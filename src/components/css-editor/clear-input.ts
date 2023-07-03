export function clearTextEditor() {
  const inputValue = document.querySelector('.code__content__input') as HTMLInputElement;
  inputValue.value = '';
}
