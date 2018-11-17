import React, { Component } from 'react';

class Header extends Component {
  state = {
    text: ''
  };
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleBlur = e => {
    console.log('123');
  };

  handleSubmit = e => {};

  handleSubmit = e => {
    if (e.which === 13) {
      this.props.addTodo(e.target.value);
      this.setState({ text: '' });
    }
  };
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.handleChange}
          value={this.state.text}
          onBlur={this.handleBlur}
          onKeyDown={this.handleSubmit}
        />
      </header>
    );
  }
}

export default Header;
