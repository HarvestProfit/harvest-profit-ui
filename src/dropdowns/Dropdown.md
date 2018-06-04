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
Also allow empty
```js
initialState = { value: "" };

const values = [
  "One",
  "Two",
  "Three"
];

<div>
  <Dropdown placeholder="Select" allowEmpty onChange={(value) => setState({ value })} selected={state.value} values={values} />
  <p>&nbsp; Currently selected value is: {state.value}</p>
</div>
```

Also allow empty without placeholder (default to empty option)
```js
initialState = { value: null };

const values = [
  {
    id: 1,
    text: 'One',
  },
  {
    id: 2,
    text: 'Two',
  },
  {
    id: 3,
    text: 'Three',
  },
];

<div>
  <Dropdown allowEmpty onChange={(value) => setState({ value })} selected={state.value} values={values} />
  <p>&nbsp; Currently selected value is: {state.value}</p>
</div>
```
