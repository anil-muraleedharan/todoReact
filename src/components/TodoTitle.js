import React from 'react';
import InputBox from './InputBox';

class TodoTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { titleEditing: false };
    this.onClick = this.onClick.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onClick() {
    this.setState({ titleEditing: true });
  }

  onEnter(heading) {
    this.setState({ titleEditing: false });
    this.props.onEnter(heading);
  }

  render() {
    if (this.state.titleEditing) {
      return (
        <InputBox
          onEnter={this.onEnter}
          value={this.props.title}
          className='header'
        />
      );
    }
    return (
      <h1 className='header' onClick={this.onClick}>
        {this.props.title}
      </h1>
    );
  }
}

export default TodoTitle;
