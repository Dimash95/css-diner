export function levelDescription(
  levelNumber: string,
  levelSelectorName: string,
  levelHelpTitle: string,
  levelSyntax: string,
  levelHelp: string,
  levelExample: string
) {
  const levelsNumbers = document.querySelector('.block-four__level-numbers') as HTMLElement;
  levelsNumbers.innerHTML = levelNumber;
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
