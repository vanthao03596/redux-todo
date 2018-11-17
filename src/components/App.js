import React, { Component } from 'react';

import Header from '../containers/Header';
import Main from '../containers/Main';

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <Header />
        <Main />
      </section>
    );
  }
}

export default App;
