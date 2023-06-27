export function addBlockFour(
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
