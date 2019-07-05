Hello sup

```js
import Button from '../misc/Button'
;

initialState = {
  isSaving: false,
}

function toggleSaving() {
  setState({ isSaving: !state.isSaving });
}

<div>
    <Button color onClick={() => toggleSaving()}>Toggle Saving</Button>
    <p>
    <Saving isSaving={state.isSaving} />
    </p>
    <p>
      Saving: {state.isSaving ? 'yes':'no'}
    </p>
</div>
```
