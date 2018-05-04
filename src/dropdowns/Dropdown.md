Simple dropdown example:

```js
initialState = { value: "One" };

const values = [
  "One",
  "Two",
  "Three"
];

<div>
  <Dropdown onChange={(value) => setState({ value })} selected={state.value} values={values} />
  <p>Currently selected value is: {state.value}</p>
</div>
```

Dropdown with placeholder:

```js
initialState = { value: "" };

const values = [
  "One",
  "Two",
  "Three"
];

<div>
  <Dropdown placeholder="Select" onChange={(value) => setState({ value })} selected={state.value} values={values} />
  <p>Currently selected value is: {state.value}</p>
</div>
```
