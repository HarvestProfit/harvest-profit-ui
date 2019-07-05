Sometimes you don't need a full panel, but instead need some text aligned with your panels.  Use
the panel spacer component to do that.
```js
import Column from '../layout/Column'
import Row from '../layout/Row'

import Panel from './Panel'
import PanelTitle from './PanelTitle'
import PanelContents from './PanelContents'
import PanelSection from './PanelSection'
;

<Column hAlign="stretch">
<PanelSpacer>
  <h1>Spaced panel</h1>
</PanelSpacer>
<Panel>
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
</Column>
```
