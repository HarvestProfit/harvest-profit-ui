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
  <p>&nbsp; Currently selected value is: {state.value}</p>
</div>
```
