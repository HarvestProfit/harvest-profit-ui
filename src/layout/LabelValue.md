The LabelValue component allows you to display labels and values in various configurations.

Here is a simple horizontal layout:
```js
<LabelValue
  label="Name"
  value="Jake"
/>
```

Here is a simple stacked layout:
```js
<LabelValue
  label="Name"
  value="Jake"
  stacked
/>
```

You can change the importance of the label values
```js
import Row from './Row'
;

<Row vAlign="bottom">
  <LabelValue
    label="Name"
    value="Jake"
    stacked
    important
  />
  <LabelValue
    label="Name"
    value="Jake"
    stacked
  />
  <LabelValue
    label="Name"
    value="Jake"
    stacked
    unimportant
    negative
  />
</Row>
```

Reverse the label and values
```js
import Column from './Column'
;

<Column>
  <LabelValue
    label="Name"
    value="Jake"
    stacked
    swapped
  />
  <LabelValue
    label="Name"
    value="Jake"
    swapped
  />
</Column>
```
