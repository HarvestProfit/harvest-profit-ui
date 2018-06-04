Standard panel

```js
<Panel>
  <PanelTitle>Sample Panel</PanelTitle>
  <PanelContents>
    <h1>Hey there!</h1>
  </PanelContents>
</Panel>
```

Sometimes you want the content to be padded correctly
```js
<Panel>
  <PanelTitle>Sample Panel</PanelTitle>
  <PanelContents padding>
    <h1>Hey there!</h1>
  </PanelContents>
</Panel>
```

Add more content to the header
```js
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
