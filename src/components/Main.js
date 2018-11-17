import React, { Component } from 'react';
import VisibleTodiList from '../containers/VisibleTodoList';
import Footer from './Footer';

class Main extends Component {
  render() {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label>Mark all as complete</label>
        <VisibleTodiList />
        <Footer />
      </section>
    );
  }
}

export default Main;
