
Creates a custom option component with an edit button

```js
import SearchableDropdown from '../dropdowns/SearchableDropdown'

const option = props => (
  <EditableDropdownOption
    {...props}
    actionTitle="Edit Agreement"
    onEditClick={() => alert(`Edit option ${props.text}`)}
    onClick={props.onClick}
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
    component={option}
  />
</div>
```
