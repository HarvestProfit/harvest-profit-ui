
```js
initialState = { value: []};

<div className="filters-v2">
  <FilterDropdown
    onChange={(value) => setState({ value })}
    values={["hello", "goodbye"]}
    value={state.value}
    name = {"NAME"}
    placeholder = {"Search"}  
  />
</div>
```
