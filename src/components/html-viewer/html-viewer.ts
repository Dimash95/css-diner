export function htmlViewer(boardMarkup: string) {
  const boardMarkupValue = document.querySelector('.boardMarkup') as HTMLDivElement;
  const array = [...boardMarkup];
  const text = array.map((e) => {
    if (e === '<') {
      return (e = '&lt');
    } else if (e === '>') {
      return (e = '&gt');
    } else {
      return e;
    }
  });
  boardMarkupValue.innerHTML = text.join('');
}
