import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <Header />
        <Main />
        <Footer />
      </section>
    );
  }
}

export default App;
