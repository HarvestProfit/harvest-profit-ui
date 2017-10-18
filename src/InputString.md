Simple string input example:

```js
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <InputString
          defaultValue={this.state.value}
          onChange={this.onChange}
          placeholder="Type Something"
        />
      </div>
    );
  }
}

// Render the component
<Input />

```
