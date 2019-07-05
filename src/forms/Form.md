A sample form layout

```js
import Row from '../layout/Row'
import InputString from '../inputs/InputString'

import FormLabel from './FormLabel'
import FormText from './FormText'
;

<Form>
  <Row>
    <FormLabel>Label</FormLabel>
    <InputString value="test" onChange={() => {}}/>
  </Row>
  <Row>
    <FormLabel align="right">Right Label</FormLabel>
    <InputString value="test" onChange={() => {}}/>
  </Row>
  <Row>
    <FormLabel align="right" padRight>Right Label with padding</FormLabel>
    <InputString value="test" onChange={() => {}}/>
  </Row>
  <Row>
    <FormLabel align="right" padRight>Right Label with padding</FormLabel>
    <FormText>Some form text</FormText>
  </Row>
</Form>

```
