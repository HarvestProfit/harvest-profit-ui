Simple Searchable Dropdown List:

```js
initialState = { value: "One" };

const values = [
  "One",
  "Two",
  "Three"
];
<div>
  <h1>Value: {state.value}</h1>
  <SearchableDropdownList
    onChange={(value) => setState({ value })}
    placeholder="Select"
    values={values}
    buttonFloat
  />
</div>

```
Search with different values and labels
```js
initialState = { value: "" };

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
  <SearchableDropdownList
    onChange={(value) => setState({ value })}
    placeholder="Select"
    values={values}
  />
</div>

```
