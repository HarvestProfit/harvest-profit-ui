Simple tab demo:

```js
initialState = {
  activeTab: 1
};

<div>
  <p>Current tab: {state.activeTab}</p>
  <Button onClick={() => setState({ activeTab: 1 })}>Tab 1</Button>
  <Button onClick={() => setState({ activeTab: 2 })}>Tab 2</Button>
  <Button onClick={() => setState({ activeTab: 3 })}>Tab 3</Button>
  <Tabs activeTab={state.activeTab}>
    <Tab>Hello</Tab>
    <Tab>Good by</Tab>
    <Tab>Third Tab</Tab>
  </Tabs>
</div>
```
