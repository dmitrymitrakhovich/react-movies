import React, { Component } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
