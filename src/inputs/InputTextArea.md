```js
initialState = { value: '4242' };

<div>
  <InputTextArea
    value={state.value}
    onChange={(value) => setState({ value })}
    placeholder="type something"
  />
  <p>
    Current Value: <code>{state.value}</code>
  </p>
</div>

```
