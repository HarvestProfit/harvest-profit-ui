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
