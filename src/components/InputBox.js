import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onKeyDown({ keyCode }) {
    if (keyCode === 13) {
      this.props.onEnter(this.state.value);
      this.setState({ value: '' });
    }
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <input
        type='text'
        value={this.state.value}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

export default InputBox;
