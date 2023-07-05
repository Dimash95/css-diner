export const taskLevels = [
  {
    level: 'Level 1 of 10',
    helpTitle: 'Select elements by their type',
    selectorName: 'Type Selector',
    doThis: 'Select the plates',
    selector: 'plate',
    syntax: 'A',
    help: 'Selects all elements of type <span class="tag">A</span>. Type refers to the type of tag, so <span class="tag">div</span>, <span class="tag">p</span> and <span class="tag">ul</span> are all different element types.',
    example: '<span class="tag">div</span> selects all <span class="tag">div</span> elements.',
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
    help: 'Selects all elements of type <span class="tag">A</span>. Type refers to the type of tag, so <span class="tag">div</span>, <span class="tag">p</span> and <span class="tag">ul</span> are all different element types.',
    example: '<span class="tag">div</span> selects all <span class="tag">div</span> elements.',
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
    help: 'Selects the element with a specific <span class="tag">id</span>. You can also combine the ID selector with the type selector.',
    example: '<span class="tag">#cool</span> selects any element with <span class="tag">id="cool"</span>',
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
    help: 'Selects all <span class="tag">B</span> inside of <span class="tag">A</span>. <span class="tag">B</span> is called a descendant because it is inside of another element.',
    example:
      '<span class="tag">p&nbsp;&nbsp;strong</span> selects all <span class="tag">strong</span> elements that are inside of any <span class="tag">p</span>',
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
      '<span class="tag">#cool&nbsp;span</span> selects all <span class="tag">span</span> elements that are inside of elements with <span class="tag">id="cool"</span>',
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
    syntax: '.class name',
    help: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    example: '<span class="tag">.neato</span> selects all elements with <span class="tag">class="neato"</span>',
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
    example:
      '<span class="tag">ul.important</span> selects all <span class="tag">ul</span> elements that have <strong>class="important"</strong>',
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
      '<span class="tag">#big.wide</span> selects all elements with <span class="tag">id="big"</span> that also have <span class="tag">class="wide"</span>',
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
    help: 'Thanks to Shatner technology, this selects all <span class="tag">A</span> and <span class="tag">B</span> elements. You can combine any selectors this way, and you can specify more than two.',
    example:
      '<span class="tag">p, .fun</span> selects all <span class="tag">p</span> elements as well as all elements with <span class="tag">class="fun"</span>',
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
    example: '<span class="tag">p *</span> selects any element inside all <span class="tag">p</span> elements.',
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
