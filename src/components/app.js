import React, { Component } from "react";
import Pending from "./todos/pending";


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <Pending heading="Pending Todos" />
      </div>
    );
  }
}
