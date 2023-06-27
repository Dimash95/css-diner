export function addBlockThree(boardMarkup: string) {
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
