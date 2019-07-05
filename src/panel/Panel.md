Standard panel

```js
import Panel from './Panel'
import PanelTitle from './PanelTitle'
import PanelContents from './PanelContents'
;

<Panel>
  <PanelTitle>Sample Panel</PanelTitle>
  <PanelContents>
    <h1>Hey there!</h1>
  </PanelContents>
</Panel>
```

Sometimes you want the content to be padded correctly
```js
import Panel from './Panel'
import PanelTitle from './PanelTitle'
import PanelContents from './PanelContents'
;

<Panel>
  <PanelTitle>Sample Panel</PanelTitle>
  <PanelContents padding>
    <h1>Hey there!</h1>
  </PanelContents>
</Panel>
```

Add more content to the header
```js
import Row from '../layout/Row'

import Panel from './Panel'
import PanelTitle from './PanelTitle'
import PanelContents from './PanelContents'
;

<Panel>
  <PanelTitle>
    <Row hAlign="gap">
      <h2>Sample Panel</h2>
      <p>Some more content!</p>
    </Row>
  </PanelTitle>
  <PanelContents padding>
    <h1>Hey there!</h1>
  </PanelContents>
</Panel>
```

Panels can also be defined using sections instead of just titles and contents.  
```js
import Row from '../layout/Row'

import Panel from './Panel'
import PanelTitle from './PanelTitle'
import PanelSection from './PanelSection'
import PanelContents from './PanelContents'
;

<Panel>
  <PanelSection>
    <Row hAlign="gap">
      <h2>Sample Panel</h2>
      <p>Some more content!</p>
    </Row>
  </PanelSection>
  <PanelSection unimportant>
    <h1>Hey there!</h1>
  </PanelSection>
</Panel>
```

Also color your sections
```js
import Row from '../layout/Row'

import Panel from './Panel'
import PanelTitle from './PanelTitle'
import PanelSection from './PanelSection'
import PanelContents from './PanelContents'
;

<Panel>
  <PanelSection important colored>
    <Row hAlign="gap">
      <h2>Sample Panel</h2>
      <p>Some more content!</p>
    </Row>
  </PanelSection>
  <PanelSection>
    <Row hAlign="gap">
      <h2>Sample Panel</h2>
      <p>Some more content!</p>
    </Row>
  </PanelSection>
  <PanelSection unimportant colored>
    <h1>Hey there!</h1>
  </PanelSection>
</Panel>
```
