Simple example:

```js
initialState = { value: '' };

<div>
  <InputString
    value={state.value}
    onChange={(value) => setState({ value })}
    placeholder="Type Something"
  />
  <p>
    Current Value: <code>{state.value}</code>
  </p>
</div>
```


Simple error example. Errors with more than 10 characters:
```js
initialState = { value: '10 or less characters' };

<div>
  <InputString
    value={state.value}
    hasError={state.value.length > 10}
    onChange={(value) => setState({ value })}
    placeholder="10 Characters allowed"
  />
  {state.value.length > 10 ? (
    <p>
      {state.value.length} used. Please use less than 10 characters.
    </p>
  ) : (
    <p>
      {state.value.length} used. Keep typing!
    </p>
  )}
</div>
```
