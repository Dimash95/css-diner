export function titleAndTable(doThis: string, pictures: string) {
  const taskTitle = document.querySelector('.block-one__title') as HTMLElement;
  taskTitle.innerHTML = doThis;
  const table = document.querySelector('.block-one__table') as HTMLElement;
  table.innerHTML = pictures;
}
