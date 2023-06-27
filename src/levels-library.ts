export const taskLevels = [
  {
    level: 'Level 1 of 10',
    helpTitle: 'Select elements by their type',
    selectorName: 'Type Selector',
    doThis: 'Select the plates',
    selector: 'plate',
    syntax: 'A',
    help: 'Selects all elements of type <tag>A</tag>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
    example: '<tag>div</tag> selects all <tag>div</tag> elements.',
    boardMarkup: `
  <plate/>
  <plate/>
  `,
    pictures: `
  <div class="plate animation-pulsing"></div>
  <div class="plate animation-pulsing"></div>
  `,
  },
  {
    level: 'Level 2 of 10',
    doThis: 'Select the bento boxes',
    selector: 'bento',
    syntax: 'A',
    helpTitle: 'Select elements by their type',
    selectorName: 'Type Selector',
    help: 'Selects all elements of type <tag>A</tag>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
    example: '<tag>div</tag> selects all <tag>div</tag> elements.',
    boardMarkup: `
  <bento/>
  <plate/>
  <bento/>
  `,
    pictures: `
    <div class="bento animation-pulsing"></div>
    <div class="plate"></div>
    <div class="bento animation-pulsing"></div>
    `,
  },
  {
    level: 'Level 3 of 10',
    doThis: 'Select the fancy plate',
    selector: '#fancy',
    selectorName: 'ID Selector',
    helpTitle: 'Select elements with an ID',
    syntax: '#id',
    help: 'Selects the element with a specific <tag>id</tag>. You can also combine the ID selector with the type selector.',
    example: '<tag>#cool</tag> selects any element with <tag>id="cool"</tag>',
    boardMarkup: `
  <plate id="fancy"/>
  <plate/>
  <bento/>
  `,
    pictures: `
  <div class="fancy animation-pulsing"></div>
  <div class="plate"></div>
  <div class="bento"></div>
  `,
  },
  {
    level: 'Level 4 of 10',
    helpTitle: 'Select an element inside another element',
    selectorName: 'Descendant Selector',
    doThis: 'Select the apple on the plate',
    selector: 'plate apple',
    syntax: 'A&nbsp;&nbsp;B',
    help: 'Selects all <tag>B</tag> inside of <tag>A</tag>. <tag>B</tag> is called a descendant because it is inside of another element.',
    example:
      '<tag>p&nbsp;&nbsp;strong</tag> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
    boardMarkup: `
  <bento/>
  <plate>
    <apple/>
  </plate>
  <apple/>
  `,
    pictures: `
  <div class="bento"></div>
  <div class="plate"><div class="apple animation-pulsing"></div></div>
  <div class="apple"></div>
  `,
  },
  {
    level: 'Level 5 of 10',
    doThis: 'Select the pickle on the fancy plate',
    selector: '#fancy pickle',
    selectorName: 'Descendant Selector',
    helpTitle: 'Combine the Descendant & ID Selectors',
    syntax: '#id&nbsp;&nbsp;A',
    help: 'You can combine any selector with the descendent selector.',
    example:
      '<tag>#cool&nbsp;span</tag> selects all <tag>span</tag> elements that are inside of elements with <tag>id="cool"</tag>',
    boardMarkup: `
  </bento>
    <orange/>
  <bento>
  <plate id="fancy">
    <pickle/>
  </plate>
  <plate>
    <pickle/>
  </plate>
  `,
    pictures: `
  <div class="bento"><div class="orange"></div></div>
  <div class="fancy"><div class="pickle animation-pulsing"></div></div>
  <div class="plate"><div class="pickle"></div></div>
  `,
  },
  {
    level: 'Level 6 of 10',
    doThis: 'Select the small apples',
    selector: '.small',
    selectorName: 'Class Selector',
    helpTitle: 'Select elements by their class',
    syntax: '.classname',
    help: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    example: '<tag>.neato</tag> selects all elements with <tag>class="neato"</tag>',
    boardMarkup: `
  <apple/>
  <apple class="small"/>
  <plate>
    <apple class="small"/>
  </plate>
  <plate/>
  `,
    pictures: `
  <div class="apple"></div>
  <div class="apple__small animation-pulsing"></div>
  <div class="plate"><div class="apple__small animation-pulsing"></div></div>
  <div class="plate"></div>
  `,
  },
  {
    level: 'Level 7 of 10',
    doThis: 'Select the small oranges',
    selector: 'orange.small',
    selectorName: 'Class Selector',
    helpTitle: 'Combine the Class Selector',
    syntax: 'A.className',
    help: 'You can combine the class selector with other selectors, like the type selector.',
    example: '<tag>ul.important</tag> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
    boardMarkup: `
  <apple/>
  <apple class="small"/>
  <bento>
    <orange class="small"/>
  </bento>
  <plate>
    <orange/>
  </plate>
  <plate>
    <orange class="small"/>
  </plate>`,
    pictures: `
  <div class="apple"></div>
  <div class="apple__small"></div>
  <div class="bento"><div class="orange__small animation-pulsing"></div></div>
  <div class="plate"><div class="orange"></div></div>
  <div class="plate"><div class="orange__small animation-pulsing"></div></div>
  `,
  },
  {
    level: 'Level 8 of 10',
    doThis: 'Select the small oranges in the bentos',
    selector: 'bento orange.small',
    selectorName: 'Class Selector',
    syntax: 'Put your back into it!',
    helpTitle: 'You can do it...',
    help: 'Combine what you learned in the last few levels to solve this one!',
    example:
      '<tag>#big.wide</tag> selects all elements with <tag>id="big"</tag> that also have <tag>class="wide"</tag>',
    boardMarkup: `
  <bento>
    <orange/>
  </bento>
  <orange class="small"/>
  <bento>
    <orange class="small"/>
  </bento>
  <bento>
    <apple class="small"/>
  </bento>
  <bento>
    <orange class="small"/>
  </bento>
  `,
    pictures: `
  <div class="bento"><div class="orange"></div></div>
  <div class="orange__small"></div>
  <div class="bento"><div class="orange__small animation-pulsing"></div></div>
  <div class="bento"><div class="apple__small"></div></div>
  <div class="bento"><div class="orange__small animation-pulsing"></div></div>
  `,
  },
  {
    level: 'Level 9 of 10',
    doThis: 'Select all the plates and bentos',
    selector: 'plate,bento',
    selectorName: 'Comma Combinator',
    helpTitle: 'Combine, selectors, with... commas!',
    syntax: 'A, B',
    help: 'Thanks to Shatner technology, this selects all <tag>A</tag> and <tag>B</tag> elements. You can combine any selectors this way, and you can specify more than two.',
    example: '<tag>p, .fun</tag> selects all <tag>p</tag> elements as well as all elements with <tag>class="fun"</tag>',
    boardMarkup: `
  <pickle class="small"/>
  <pickle/>
  <plate>
    <pickle/>
  </plate>
  <bento>
    <pickle/>
  </bento>
  <plate>
    <pickle/>
  </plate>
  <pickle/>
  <pickle class="small"/>
  `,
    pictures: `
  <div class="pickle__small"></div>
  <div class="pickle"></div>
  <div class="plate animation-pulsing"><div class="pickle animation-pulsing"></div></div>
  <div class="bento animation-pulsing"><div class="pickle animation-pulsing"></div></div>
  <div class="plate animation-pulsing"><div class="pickle animation-pulsing"></div></div>
  <div class="pickle"></div>
  <div class="pickle__small"></div>
  `,
  },
  {
    level: 'Level 10 of 10',
    doThis: 'Select all the things!',
    selector: '*',
    selectorName: 'The Universal Selector',
    helpTitle: 'You can select everything!',
    syntax: '*',
    help: 'You can select all elements with the universal selector! ',
    example: '<tag>p *</tag> selects any element inside all <tag>p</tag> elements.',
    boardMarkup: `
  <apple/>
  <plate>
    <orange class="small" />
  </plate>
  <bento/>
  <bento>
    <orange/>
  </bento>
  <plate id="fancy"/>
  `,
    pictures: `
    <div class="apple animation-pulsing"></div>
    <div class="plate animation-pulsing"><div class="orange__small animation-pulsing"></div></div>
    <div class="bento animation-pulsing"></div>
    <div class="bento animation-pulsing"><div class="orange animation-pulsing"></div></div>
    <div class="fancy animation-pulsing"></div>
  `,
  },
];
