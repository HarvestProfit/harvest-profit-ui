Simple numeric input example:

```js
initialState = { value: '4242.125' };

<div>
  <InputNumeric
    commaSeparator
    decimalPlaces={2}
    value={state.value}
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
    value={state.value}
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

And allow negative numbers

```js
initialState = { value: '4242' };

<div>
  <InputNumeric
    commaSeparator
    decimalPlaces={2}
    value={state.value}
    onChange={(value) => setState({ value })}
    prefix="$"
    allowNegative
  />
  <p>
    Current Value: <code>{state.value}</code>
  </p>
</div>

```

Prefix and Suffix values as well

```js
initialState = { value: '4242' };

<div>
  <InputNumeric
    commaSeparator
    decimalPlaces={2}
    value={state.value}
    onChange={(value) => setState({ value })}
    prefix="$"
    allowNegative
  />
  <p>
    Current Value: <code>{state.value}</code>
  </p>

  <InputNumeric
    commaSeparator
    decimalPlaces={2}
    value={state.value}
    onChange={(value) => setState({ value })}
    suffix=" acres"
    allowNegative
  />
  <p>
    Current Value: <code>{state.value}</code>
  </p>
</div>

```
