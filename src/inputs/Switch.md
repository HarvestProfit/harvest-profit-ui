Simple example for `<Switch />`:

```js
initialState = {
  checked: false
};

<div>
  <Switch onClick={() => setState({ checked: !state.checked })} value={state.checked} />
  <p>
    Currently: {state.checked ? "Checked" : "Not Checked"}
  </p>
</div>
```
