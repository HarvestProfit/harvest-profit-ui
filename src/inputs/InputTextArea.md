```js
initialState = { value: '4242' };

<div>
  <InputTextArea
    value={state.value}
    onChange={(value) => setState({ value })}
  />
  <p>
    Current Value: <code>{state.value}</code>
  </p>
</div>

```
