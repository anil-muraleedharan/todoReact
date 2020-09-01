import React from 'react';
import InputBox from './InputBox';

class TodoTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.onClick = this.onClick.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onClick() {
    this.setState({ isClicked: true });
  }

  onEnter(heading) {
    this.setState({ isClicked: false });
    this.props.onEnter(heading);
  }

  render() {
    if (this.state.isClicked) {
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
