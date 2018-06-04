Simple Searchable Dropdown:

```js
initialState = { value: "One" };

const values = [
  "One",
  "Two",
  "Three"
];
<div>
  <h1>Value: {state.value}</h1>
  <SearchableDropdown
    onChange={(value) => setState({ value })}
    placeholder="Select"
    values={values}
    value={state.value}
  />
</div>

```
Search with different values and labels
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
  <SearchableDropdown
    onChange={(value) => setState({ value })}
    placeholder="Select"
    values={values}
    value={state.value}
  />
</div>

```

Use with groups and allow selecting none.
```js
initialState = { value: '' };

const values = [
  {
    id: 1,
    text: "One",
    group: 'odd',
  },
  {
    id: 2,
    text: "Two",
    group: 'even',
  },
  {
    id: 3,
    text: "Three",
    group: 'odd',
  },
  {
    id: 4,
    text: "Four",
    group: 'even',
  },
  {
    id: 5,
    text: "Five",
    group: 'odd',
  },
];

const groups = [
  {
    key: 'odd',
    name: 'Odd',
    emptyText: 'No Odd Values',
  },
  {
    key: 'even',
    name: 'Even',
    emptyText: 'No Even Values',
  }
];
<div>
  <h1>Value: {state.value}</h1>
  <SearchableDropdown
    onChange={(value) => setState({ value })}
    placeholder="Select"
    values={values}
    groups={groups}
    allowEmpty
    value={state.value}
  />
</div>

```
