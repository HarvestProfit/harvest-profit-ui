Simple numeric input example:

```js
initialState = { value: '4242' };

<div>
  <InputNumeric
    commaSeparator
    decimalPlaces={2}
    defaultValue={state.value}
    onChange={(value) => setState({ value })}
    prefix="$"
  />
  <p>
    Current Value: <code>{state.value}</code>
  </p>
</div>

```


Simple example with an error state (must be less than `1001`):
```js
initialState = { value: '2001' };

<div>
  <InputNumeric
    commaSeparator
    decimalPlaces={2}
    defaultValue={state.value}
    hasError={parseFloat(state.value) > 1000}
    onChange={(value) => setState({ value })}
    prefix="$"
  />
  {parseFloat(state.value) > 1000 ? (
    <p>
      Current Value: <code>{state.value}</code> is too high!
    </p>
  ) : (
    <p>
      Current Value: <code>{state.value}</code>
    </p>
  )}
</div>

```
