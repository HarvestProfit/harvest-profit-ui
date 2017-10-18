Simple numeric input example:

```js
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '123',
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <InputNumeric
          decimalPlaces={2}
          defaultValue={this.state.value}
          onChange={this.onChange}
          prefix="$"
        />
      </div>
    );
  }
}

// Render the component
<Input />

```
