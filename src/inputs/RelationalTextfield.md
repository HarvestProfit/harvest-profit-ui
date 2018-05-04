
Enter text and select from related data.

```js
initialState = { value: '' };

const values = [
  {
    id: 1,
    text: "One"
  },
  {
    id: 2,
    text: "Two"
  },
  {
    id: 3,
    text: "Three"
  },
];
<div>
  <h1>Value: {state.value}</h1>
  <RelationalTextfield
    onChange={(value) => setState({ value })}
    placeholder="Select"
    values={values}
    value={state.value}
    icon="user"
  />
</div>
```
