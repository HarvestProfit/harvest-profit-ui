
Use a custom component to render at the end of the dropdown

```js
import SearchableDropdown from '../dropdowns/SearchableDropdown'
;

const endCreate = () => (
  <DropdownEndAction
    text="+ Create New"
    actionTitle="Create something great!"
    onClick={() => alert('Clicked Create!')}
  />
);

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
    endComponent={endCreate}
  />
</div>
```
