Simple numeric input example:

```js
initialState = { value: '123' };

<InputNumeric
  decimalPlaces={2}
  defaultValue={state.value}
  onChange={(value) => setState({ value })}
  prefix="$"
/>

```
